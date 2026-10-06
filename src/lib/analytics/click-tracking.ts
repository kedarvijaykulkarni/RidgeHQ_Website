// Turns a clicked link/button into GA4 `ui_click` event params. Kept free of
// DOM access so it can be unit-tested; `ClickTracker` reads the element.

export type ClickElementKind = "link" | "button" | "tab";

export interface ClickTarget {
  kind: ClickElementKind;
  /** Visible text — for a card link, its heading rather than the whole card. */
  text: string;
  /** Used when there is no visible text (icon buttons like the menu toggle). */
  ariaLabel?: string | null;
  /** Absolute URL, for links only. */
  href?: string | null;
  /** Nearest `data-ga-location`, or the landmark the element sits in. */
  location: string;
}

const MAX_TEXT = 100;

export function clickEventParams(
  target: ClickTarget,
  currentOrigin: string
): Record<string, string | boolean> {
  const label = (target.text.trim() ? target.text : target.ariaLabel ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_TEXT);

  const params: Record<string, string | boolean> = {
    ui_element: target.kind,
    ui_location: target.location,
    link_text: label,
  };

  if (target.href) {
    params.link_url = target.href;
    try {
      const url = new URL(target.href);
      params.outbound = (url.protocol === "http:" || url.protocol === "https:") && url.origin !== currentOrigin;
    } catch {
      params.outbound = false;
    }
  }

  return params;
}
