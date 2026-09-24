import {
  type YouTubeVideo,
  isoDuration,
  youtubeEmbedUrl,
  youtubeThumbnailUrl,
} from "@/lib/config/videos";

/**
 * schema.org VideoObject for an embedded YouTube video — the fields Google
 * requires (name, thumbnailUrl, uploadDate) plus the recommended description,
 * duration, and embedUrl. No contentUrl: that must point at a video file,
 * which a YouTube embed doesn't expose.
 */
export function videoObjectJsonLd(video: YouTubeVideo) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: [youtubeThumbnailUrl(video, "maxresdefault"), youtubeThumbnailUrl(video, "hqdefault")],
    uploadDate: video.uploadDate,
    duration: isoDuration(video.durationSeconds),
    embedUrl: youtubeEmbedUrl(video),
  };
}
