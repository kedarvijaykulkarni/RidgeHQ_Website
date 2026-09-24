import { videoObjectJsonLd } from "./videoObjectJsonLd";
import { homeVideo, isoDuration } from "./config/videos";
import sitemap from "@/app/sitemap";
import { siteUrl } from "./config/site";

describe("isoDuration", () => {
  it.each([
    [61, "PT1M1S"],
    [60, "PT1M"],
    [45, "PT45S"],
    [0, "PT0S"],
    [600, "PT10M"],
  ])("%i seconds → %s", (seconds, expected) => {
    expect(isoDuration(seconds)).toBe(expected);
  });
});

describe("videoObjectJsonLd", () => {
  const ld = videoObjectJsonLd(homeVideo);

  it("has every property Google requires for a video rich result", () => {
    expect(ld["@type"]).toBe("VideoObject");
    expect(ld.name).toBeTruthy();
    expect(ld.thumbnailUrl.length).toBeGreaterThan(0);
    expect(Number.isNaN(Date.parse(ld.uploadDate))).toBe(false);
    // Offset is required when a time is given, or Google reads it as ambiguous.
    expect(ld.uploadDate).toMatch(/[+-]\d\d:\d\d$|Z$/);
  });

  it("points at the YouTube embed and thumbnails for the configured video", () => {
    expect(ld.embedUrl).toBe(`https://www.youtube-nocookie.com/embed/${homeVideo.youtubeId}`);
    for (const url of ld.thumbnailUrl) expect(url).toContain(`/vi/${homeVideo.youtubeId}/`);
    expect(ld.duration).toBe("PT1M1S");
  });
});

describe("video sitemap entry", () => {
  const entries = sitemap();

  it("attaches the home video to the home page only, matching its JSON-LD", () => {
    const withVideos = entries.filter((e) => e.videos?.length);
    expect(withVideos.map((e) => e.url)).toEqual([siteUrl]);
    const [video] = withVideos[0].videos!;
    const ld = videoObjectJsonLd(homeVideo);
    expect(video.title).toBe(ld.name);
    expect(video.description).toBe(ld.description);
    expect(video.player_loc).toBe(ld.embedUrl);
    expect(video.thumbnail_loc).toBe(ld.thumbnailUrl[0]);
    expect(video.publication_date).toBe(ld.uploadDate);
  });
});
