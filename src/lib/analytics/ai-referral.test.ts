import { detectAiReferralSource } from "./ai-referral";

describe("detectAiReferralSource", () => {
  it("detects known AI-assistant referrers", () => {
    expect(detectAiReferralSource("https://chat.openai.com/")).toBe("chatgpt");
    expect(detectAiReferralSource("https://chatgpt.com/c/abc")).toBe("chatgpt");
    expect(detectAiReferralSource("https://www.perplexity.ai/search")).toBe("perplexity");
    expect(detectAiReferralSource("https://gemini.google.com/app")).toBe("gemini");
    expect(detectAiReferralSource("https://copilot.microsoft.com/")).toBe("copilot");
    expect(detectAiReferralSource("https://www.bing.com/chat?q=ridgehq")).toBe("copilot");
    expect(detectAiReferralSource("https://claude.ai/chat/abc")).toBe("claude");
  });

  it("returns null for an empty or unrelated referrer", () => {
    expect(detectAiReferralSource("")).toBeNull();
    expect(detectAiReferralSource("https://www.google.com/search?q=ridgehq")).toBeNull();
  });

  it("returns null for an unparseable referrer", () => {
    expect(detectAiReferralSource("not a url")).toBeNull();
  });

  it("does not match a hostname that merely contains a known domain as a substring", () => {
    expect(detectAiReferralSource("https://claude.ai.attacker.example/")).toBeNull();
    expect(detectAiReferralSource("https://notclaude.aihost.com/")).toBeNull();
    expect(detectAiReferralSource("https://bing.com.attacker.example/chat")).toBeNull();
  });

  it("does not match a referrer that only contains a known domain in its path", () => {
    expect(detectAiReferralSource("https://random.example.com/redirect?to=claude.ai")).toBeNull();
  });

  it("requires the /chat path prefix for bing.com specifically", () => {
    expect(detectAiReferralSource("https://www.bing.com/search?q=ridgehq")).toBeNull();
  });
});
