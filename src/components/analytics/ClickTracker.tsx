"use client";

import { useEffect } from "react";
import { event } from "@/lib/analytics/google-analytics";
import { clickEventParams, type ClickElementKind } from "@/lib/analytics/click-tracking";

const CLICKABLE = 'a[href], button, [role="tab"], [role="button"]';

function kindOf(el: Element): ClickElementKind {
  if (el.getAttribute("role") === "tab") return "tab";
  return el.tagName === "A" ? "link" : "button";
}

function locationOf(el: Element): string {
  const tagged = el.closest("[data-ga-location]")?.getAttribute("data-ga-location");
  if (tagged) return tagged;
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  return "content";
}

// Sends a `ui_click` for every link, button and tab clicked anywhere on the
// site, tagged with where it sits (`data-ga-location` on nav regions,
// otherwise header/footer/content). One document-level listener, so server
// components need no client boundary. `event()` no-ops outside production.
export function ClickTracker() {
  useEffect(() => {
    function handleClick(nativeEvent: MouseEvent) {
      const target = nativeEvent.target;
      if (!(target instanceof Element)) return;
      const el = target.closest<HTMLElement>(CLICKABLE);
      if (!el) return;

      // Card links wrap a whole card, so their heading is the label. Menu
      // links stack a title over a description, so take the first rendered
      // line rather than textContent, which runs the two together.
      const heading = el.tagName === "A" ? el.querySelector("h1, h2, h3, h4") : null;
      const text = heading?.textContent ?? el.innerText.split("\n").find((line) => line.trim()) ?? "";

      event(
        "ui_click",
        clickEventParams(
          {
            kind: kindOf(el),
            text,
            ariaLabel: el.getAttribute("aria-label"),
            href: el instanceof HTMLAnchorElement ? el.href : null,
            location: locationOf(el),
          },
          window.location.origin
        )
      );
    }

    // Capture phase, so clicks are seen even if a component stops propagation.
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
