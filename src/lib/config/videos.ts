export interface YouTubeVideo {
  youtubeId: string;
  /** Exactly as published on YouTube — Google cross-checks structured data against the video itself. */
  title: string;
  description: string;
  /** ISO 8601, from the YouTube video's own upload date. */
  uploadDate: string;
  durationSeconds: number;
}

/**
 * The AI Copilot demo embedded on the home page. One record feeds the
 * player, the VideoObject JSON-LD, and the video sitemap entry, so the three
 * can't disagree (Search Console flags mismatches between them).
 */
export const homeVideo: YouTubeVideo = {
  youtubeId: "kG4CtR4UEy4",
  title: "Move beyond spreadsheets: RidgeHQ AI copilot handles dive center scheduling.",
  description:
    "Managing dive center operations and scheduling can be complex, especially when migrating from spreadsheets or outdated booking systems. RidgeHQ AI copilot automates reading and scheduling tasks, providing a reliable, integrated layer of intelligence directly into your platform.",
  uploadDate: "2026-09-23T20:52:59-07:00",
  durationSeconds: 61,
};

export const youtubeWatchUrl = (v: YouTubeVideo) => `https://www.youtube.com/watch?v=${v.youtubeId}`;
/** The privacy-enhanced player actually rendered on the page — also the JSON-LD embedUrl and sitemap player_loc, so all three match. */
export const youtubeEmbedUrl = (v: YouTubeVideo) => `https://www.youtube-nocookie.com/embed/${v.youtubeId}`;
export const youtubeThumbnailUrl = (v: YouTubeVideo, size: "maxresdefault" | "hqdefault" = "maxresdefault") =>
  `https://i.ytimg.com/vi/${v.youtubeId}/${size}.jpg`;

/** ISO 8601 duration, e.g. 61 → "PT1M1S". */
export function isoDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `PT${m ? `${m}M` : ""}${s || !m ? `${s}S` : ""}`;
}
