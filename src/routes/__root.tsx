import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import {
  CLUB_ADDRESS,
  CLUB_MAPS_EMBED_URL,
  CLUB_MAPS_SHARE_URL,
  CLUB_PHONES,
  SITE_URL,
  socialLinks,
} from "../lib/site-data";
import { translations } from "../lib/translations";
import { LanguageProvider } from "../lib/i18n";

// Structured data (JSON-LD) injected once into the page <head> for SEO:
// a LocalBusiness entry (with address, hours, geo and social profiles) plus an
// FAQPage using the English FAQ copy.
const faqEn = translations.en.faq;
const geoMatch = CLUB_MAPS_EMBED_URL.match(/!3d([\d.]+)!2d([\d.]+)/);
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#business`,
      name: "PC's Wellness Club",
      url: SITE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      telephone: CLUB_PHONES[0],
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: CLUB_ADDRESS,
        addressCountry: "IN",
      },
      ...(geoMatch
        ? {
            geo: {
              "@type": "GeoCoordinates",
              latitude: Number(geoMatch[1]),
              longitude: Number(geoMatch[2]),
            },
          }
        : {}),
      hasMap: CLUB_MAPS_SHARE_URL,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "08:00",
          closes: "10:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "17:30",
          closes: "19:30",
        },
      ],
      sameAs: socialLinks.filter((link) => link.href.startsWith("http")).map((link) => link.href),
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: faqEn.q1,
          acceptedAnswer: { "@type": "Answer", text: faqEn.a1 },
        },
        {
          "@type": "Question",
          name: faqEn.q2,
          acceptedAnswer: { "@type": "Answer", text: faqEn.a2 },
        },
        {
          "@type": "Question",
          name: faqEn.q3,
          acceptedAnswer: { "@type": "Answer", text: faqEn.a3 },
        },
        {
          "@type": "Question",
          name: faqEn.q4,
          acceptedAnswer: { "@type": "Answer", text: faqEn.a4 },
        },
        {
          "@type": "Question",
          name: faqEn.q5,
          acceptedAnswer: { "@type": "Answer", text: faqEn.a5 },
        },
      ],
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PC's Wellness Club — Together Towards Better Health" },
      {
        name: "description",
        content:
          "Personalized nutrition guidance, healthy lifestyle coaching, and a supportive community to help you achieve lasting wellness results.",
      },
      { property: "og:title", content: "PC's Wellness Club — Together Towards Better Health" },
      {
        property: "og:description",
        content:
          "Personalized nutrition guidance, healthy lifestyle coaching, and a supportive wellness community.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:alt", content: "PC's Wellness Club — community" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      { "script:ld+json": structuredData },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Dancing+Script:wght@600;700&family=Mukta:wght@300;400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  // Enable smooth anchor scrolling only after the page has fully loaded.
  // Scroll restoration on first load therefore stays instant and the page
  // does not visibly "slide" upward as it loads.
  useEffect(() => {
    const enableSmooth = () => {
      requestAnimationFrame(() => {
        document.documentElement.classList.add("smooth-scroll");
      });
    };
    if (document.readyState === "complete") {
      enableSmooth();
      return;
    }
    window.addEventListener("load", enableSmooth);
    return () => window.removeEventListener("load", enableSmooth);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
