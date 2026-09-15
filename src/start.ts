import { createCsrfMiddleware, createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Server functions are same-origin RPC endpoints — protect them from
// cross-site (CSRF) requests. TanStack's client automatically includes the
// token it issues, so normal browsing is unaffected.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

// Region-based default language. On the first page view we set a cookie
// (read by detectLanguage() in lib/i18n.tsx) so visitors from India land in
// Hindi, and from Maharashtra in Marathi — while the language switcher and the
// user's saved choice still take precedence. Works on Vercel (x-vercel-ip-*)
// and Cloudflare (cf-ipcountry / cf-region-code); skipped elsewhere (e.g. dev).
const LANGUAGE_COOKIE = "pcwc-default-lang";

const languageDefaultMiddleware = createMiddleware().server(
  async ({ request, handlerType, next }) => {
    const { response } = await next();

    // Only page/document responses; never overwrite an existing choice.
    if (handlerType !== "router") return response;
    const cookieHeader = request.headers.get("cookie") ?? "";
    if (cookieHeader.includes(`${LANGUAGE_COOKIE}=`)) return response;

    const country =
      request.headers.get("x-vercel-ip-country") ?? request.headers.get("cf-ipcountry");
    const region =
      request.headers.get("x-vercel-ip-country-region") ?? request.headers.get("cf-region-code");

    let lang: "en" | "hi" | "mr" | null = null;
    if (country === "IN") lang = region === "MH" ? "mr" : "hi";
    if (!lang) return response;

    const headers = new Headers(response.headers);
    headers.append(
      "Set-Cookie",
      `${LANGUAGE_COOKIE}=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`,
    );
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
);

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, csrfMiddleware, languageDefaultMiddleware],
}));
