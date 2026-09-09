// Server-side live reader for the video-testimonials card grid.
//
// Returns the *current* contents of the unlisted YouTube playlist so the page
// can refresh itself without a rebuild/redeploy whenever videos are added,
// removed or reordered on YouTube.
//
// Design notes:
//  - Keyless: reads the (accessible-by-link) playlist page exactly like the
//    `npm run sync:videos` script does.
//  - Caching: disabled during local development (so playlist edits show up on
//    the next refresh, no server restart needed) and 60 seconds in production.
//  - On any error it resolves to [] so callers can keep their static fallback.
import { createServerFn } from "@tanstack/react-start";

export type VideoStory = { videoId: string; name: string };

const PLAYLIST_ID = "PLXm6bqKm0qOk";
const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";

// Cache the playlist for 60s in production to avoid hammering YouTube on every
// visit; 0ms in dev so you always see the latest playlist without restarting.
const CACHE_TTL_MS = import.meta.env.DEV ? 0 : 60 * 1000;

let cache: { at: number; items: VideoStory[] } | null = null;

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, { headers: { "user-agent": USER_AGENT } });
  if (!res.ok) throw new Error(`Fetch failed (${res.status}): ${url}`);
  return res.text();
}

// Returns video IDs in playlist order from the page's watch endpoints.
// Every playlist item links to /watch?v=<id>&list=<list>&index=<n>.
function extractOrderedIds(html: string): string[] {
  const byIndex = new Map<number, string>();
  const re = /"url":"\/watch\?v=([A-Za-z0-9_-]{11})\\u0026list=[A-Za-z0-9_-]+\\u0026index=(\d+)/g;
  for (const m of html.matchAll(re)) {
    const index = Number(m[2]);
    if (!byIndex.has(index)) byIndex.set(index, m[1]);
  }
  const ids = [...byIndex.entries()].sort((a, b) => a[0] - b[0]).map(([, id]) => id);
  if (ids.length === 0) throw new Error("No playlist items found on the playlist page.");
  return ids;
}

// The video title IS the member name (PC's Wellness Club convention).
async function fetchVideoName(videoId: string): Promise<string> {
  const json = await fetchText(
    `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
  );
  const { title } = JSON.parse(json) as { title?: string };
  const name = (title ?? "").trim();
  if (!name) throw new Error(`Empty title returned for video ${videoId}`);
  return name;
}

export const getLiveVideoStories = createServerFn({ method: "GET" }).handler(async () => {
  const now = Date.now();
  if (cache && now - cache.at < CACHE_TTL_MS) return cache.items;

  try {
    const html = await fetchText(PLAYLIST_URL);
    const ids = extractOrderedIds(html);
    const items: VideoStory[] = [];
    for (const videoId of ids) {
      items.push({ videoId, name: await fetchVideoName(videoId) });
    }
    cache = { at: now, items };
    return items;
  } catch (error) {
    console.error("[live-video-stories] playlist fetch failed, using static fallback:", error);
    return [];
  }
});
