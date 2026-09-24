// The slice of the YouTube IFrame Player API used by YouTubeEmbed.
export {};

declare global {
  namespace YT {
    interface Player {
      getCurrentTime(): number;
      getDuration(): number;
    }
    interface OnStateChangeEvent {
      data: number;
      target: Player;
    }
    interface PlayerOptions {
      /** Omitted when attaching to an existing embed <iframe>, as YouTubeEmbed does. */
      videoId?: string;
      events?: {
        onStateChange?: (e: OnStateChangeEvent) => void;
      };
    }
  }

  interface Window {
    YT?: {
      Player: new (el: HTMLElement, options: YT.PlayerOptions) => YT.Player;
      PlayerState: { ENDED: number; PLAYING: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}
