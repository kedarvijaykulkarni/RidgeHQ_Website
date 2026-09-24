"use client";

import { useEffect, useRef } from "react";
import { event } from "@/lib/analytics/google-analytics";
import { newMilestones, videoEventParams } from "@/lib/analytics/videoTracking";
import { type YouTubeVideo, youtubeEmbedUrl, youtubeWatchUrl } from "@/lib/config/videos";

let apiPromise: Promise<NonNullable<Window["YT"]>> | null = null;

function loadYouTubeApi(): Promise<NonNullable<Window["YT"]>> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  apiPromise ??= new Promise((resolve, reject) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve(window.YT!);
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => {
      apiPromise = null;
      reject(new Error("YouTube IFrame API failed to load"));
    };
    document.head.appendChild(script);
  });
  return apiPromise;
}

/**
 * YouTube embed that's a real <iframe> in the server HTML — Google has to
 * find the player without clicking anything — lazy-loaded so it costs
 * nothing until it nears the viewport. At that point the IFrame API attaches
 * to it and reports GA4 video events (start, 10/25/50/75% progress,
 * complete). If the API is blocked the video still plays, just untracked.
 */
export function YouTubeEmbed({ video }: { video: YouTubeVideo }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let player: YT.Player | undefined;
    let timer: number | undefined;
    let cancelled = false;
    let started = false;
    let completed = false;
    const sent = new Set<number>();
    const meta = { title: video.title, url: youtubeWatchUrl(video) };

    const report = (name: string, percent?: number) => {
      if (!player) return;
      event(name, videoEventParams(meta, player.getCurrentTime(), player.getDuration(), percent));
    };
    const reportProgress = () => {
      const duration = player?.getDuration();
      if (!player || !duration) return;
      for (const m of newMilestones((player.getCurrentTime() / duration) * 100, sent)) {
        sent.add(m);
        report("video_progress", m);
      }
    };

    const attach = () => {
      loadYouTubeApi()
        .then((api) => {
          if (cancelled) return;
          player = new api.Player(iframe, {
            events: {
              onStateChange: (e) => {
                window.clearInterval(timer);
                if (e.data === api.PlayerState.PLAYING) {
                  if (!started) {
                    started = true;
                    report("video_start");
                  }
                  timer = window.setInterval(reportProgress, 1000);
                } else if (e.data === api.PlayerState.ENDED && !completed) {
                  reportProgress();
                  completed = true;
                  report("video_complete", 100);
                }
              },
            },
          });
        })
        .catch(() => {
          // Blocked (e.g. by an ad blocker): the iframe still plays, untracked.
        });
    };

    // Attach when the iframe itself loads (native lazy loading), not before.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          attach();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(iframe);

    return () => {
      cancelled = true;
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [video]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-black shadow-2xl">
      <iframe
        ref={iframeRef}
        src={`${youtubeEmbedUrl(video)}?enablejsapi=1&rel=0&playsinline=1`}
        title={video.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
