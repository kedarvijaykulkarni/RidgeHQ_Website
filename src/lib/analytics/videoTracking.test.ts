import { newMilestones, videoEventParams } from "./videoTracking";

describe("newMilestones", () => {
  it("reports nothing before 10%", () => {
    expect(newMilestones(9.9, new Set())).toEqual([]);
  });

  it("reports every milestone passed since the last check, in order", () => {
    // A seek from 5% to 60% crosses three milestones at once.
    expect(newMilestones(60, new Set())).toEqual([10, 25, 50]);
  });

  it("never re-reports a milestone already sent", () => {
    expect(newMilestones(80, new Set([10, 25, 50]))).toEqual([75]);
    expect(newMilestones(99, new Set([10, 25, 50, 75]))).toEqual([]);
  });
});

describe("videoEventParams", () => {
  const video = { title: "Demo", url: "https://www.youtube.com/watch?v=x" };

  it("uses GA4's enhanced-measurement parameter names", () => {
    expect(videoEventParams(video, 30.4, 61.2, 50)).toEqual({
      video_provider: "youtube",
      video_title: "Demo",
      video_url: "https://www.youtube.com/watch?v=x",
      video_current_time: 30,
      video_duration: 61,
      video_percent: 50,
      visible: true,
    });
  });

  it("omits video_percent for video_start", () => {
    expect(videoEventParams(video, 0, 61)).not.toHaveProperty("video_percent");
  });
});
