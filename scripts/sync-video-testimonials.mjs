// Syncs src/lib/site-data.ts `videoStories` with the unlisted YouTube playlist.
//
// Run `npm run sync:videos` after adding/removing/reordering videos in the
// playlist, then commit + deploy. The script:
//   1. Fetches the (unlisted, accessible-by-link) playlist page.
//   2. Reads the videos in playlist order from the embedded watch endpoints
//      (each carries an `index` param).
//   3. Resolves each video's display name from its YouTube title (oEmbed).
//   4. Rewrites the `videoStories` array in site-data.ts.
//
// If anything fails it throws and leaves site-data.ts untouched.

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const PLAYLIST_ID = "PLXm6bqKm0qOk";
const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";

const siteDataPath = fileURLToPath(new URL("../src/lib/site-data.ts", import.meta.url));

async function fetchText(url) {
  const res = await fetch(url, { headers: { "user-agent": UA } });
  if (!res.ok) throw new Error(`Fetch failed (${res.status}): ${url}`);
  return res.text();
}

// Returns video IDs in playlist order from the page's watch endpoints.
// Every playlist item links to /watch?v=<id>&list=<list>&index=<n>.
function extractOrderedIds(html) {
  const byIndex = new Map();
  const re = /"url":"\/watch\?v=([A-Za-z0-9_-]{11})\\u0026list=[A-Za-z0-9_-]+\\u0026index=(\d+)/g;
  for (const m of html.matchAll(re)) {
    const index = Number(m[2]);
    if (!byIndex.has(index)) byIndex.set(index, m[1]);
  }
  const ids = [...byIndex.entries()].sort((a, b) => a[0] - b[0]).map(([, id]) => id);
  if (ids.length === 0) {
    throw new Error("No playlist items found on the playlist page.");
  }
  return ids;
}

// The video title IS the member name (PC's Wellness Club convention).
async function fetchVideoName(videoId) {
  const json = await fetchText(
    `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
  );
  const { title } = JSON.parse(json);
  const name = (title || "").trim();
  if (!name) throw new Error(`Empty title returned for video ${videoId}`);
  return name;
}

function renderArray(items) {
  return items
    .map((it) => `  { videoId: "${it.videoId}", name: ${JSON.stringify(it.name)} },`)
    .join("\n");
}

async function main() {
  console.log(`Syncing video testimonials from playlist ${PLAYLIST_ID}…`);
  const html = await fetchText(PLAYLIST_URL);
  const ids = extractOrderedIds(html);

  const items = [];
  for (const videoId of ids) {
    const name = await fetchVideoName(videoId);
    items.push({ videoId, name });
  }

  const src = await readFile(siteDataPath, "utf8");
  const marker = "export const videoStories = [";
  const listStart = src.indexOf(marker);
  if (listStart === -1) {
    throw new Error("Could not find `videoStories` in site-data.ts");
  }
  const arrayOpen = src.indexOf("[", listStart);
  const arrayClose = src.indexOf("];", arrayOpen);
  if (arrayClose === -1) throw new Error("Could not find end of videoStories array");

  const next = `${src.slice(0, arrayOpen + 1)}\n${renderArray(items)}\n${src.slice(arrayClose)}`;
  await writeFile(siteDataPath, next);

  console.log(`Done. Updated videoStories with ${items.length} video(s):`);
  for (const it of items) console.log(`  - ${it.name} (${it.videoId})`);
}

main().catch((err) => {
  console.error(`Sync failed — site-data.ts was NOT modified.\n${err.message}`);
  process.exit(1);
});
