import { clickEventParams } from "./click-tracking";

const ORIGIN = "https://www.ridgehq.app";

describe("clickEventParams", () => {
  it("describes an internal link with its location", () => {
    expect(
      clickEventParams(
        { kind: "link", text: "Dive Centers", href: `${ORIGIN}/solutions/dive-centers`, location: "mega_menu" },
        ORIGIN
      )
    ).toEqual({
      ui_element: "link",
      ui_location: "mega_menu",
      link_text: "Dive Centers",
      link_url: `${ORIGIN}/solutions/dive-centers`,
      outbound: false,
    });
  });

  it("flags links to other sites as outbound", () => {
    const params = clickEventParams(
      { kind: "link", text: "LinkedIn", href: "https://www.linkedin.com/in/x", location: "footer" },
      ORIGIN
    );
    expect(params.outbound).toBe(true);
  });

  it("does not flag mailto/tel links as outbound", () => {
    const params = clickEventParams(
      { kind: "link", text: "Email us", href: "mailto:hello@ridgehq.app", location: "content" },
      ORIGIN
    );
    expect(params.outbound).toBe(false);
  });

  it("falls back to aria-label for icon-only buttons and omits link fields", () => {
    expect(
      clickEventParams({ kind: "button", text: "  ", ariaLabel: "Open menu", location: "header" }, ORIGIN)
    ).toEqual({ ui_element: "button", ui_location: "header", link_text: "Open menu" });
  });

  it("collapses whitespace and caps the label at 100 characters", () => {
    const params = clickEventParams(
      { kind: "tab", text: `  Water\n   Sports ${"x".repeat(200)}`, location: "content" },
      ORIGIN
    );
    expect(params.link_text).toMatch(/^Water Sports x+$/);
    expect((params.link_text as string).length).toBe(100);
  });
});
