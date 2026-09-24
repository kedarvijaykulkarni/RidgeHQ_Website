// GA4 video events for the YouTube embed (YouTubeEmbed). Names and parameters match
// GA4's own enhanced-measurement video events (video_start / video_progress /
// video_complete), so they land in the standard reports — which is also why
// Enhanced measurement → "Video engagement" must stay OFF for this stream,
// or every play is counted twice. See docs/GOOGLE_ANALYTICS.md.

export const VIDEO_PROGRESS_MILESTONES = [10, 25, 50, 75] as const;

/** Milestones reached at `percent` that haven't been reported yet, in order. */
export function newMilestones(percent: number, sent: ReadonlySet<number>): number[] {
  return VIDEO_PROGRESS_MILESTONES.filter((m) => percent >= m && !sent.has(m));
}

export function videoEventParams(
  video: { title: string; url: string },
  currentTime: number,
  duration: number,
  percent?: number,
): Record<string, string | number | boolean> {
  return {
    video_provider: "youtube",
    video_title: video.title,
    video_url: video.url,
    video_current_time: Math.round(currentTime),
    video_duration: Math.round(duration),
    ...(percent !== undefined ? { video_percent: percent } : {}),
    visible: true,
  };
}
