import { scoreReadiness, getReadinessBand, readinessQuestions, readinessBands } from "./readinessAssessment";

describe("scoreReadiness", () => {
  it("sums the selected answer points", () => {
    expect(scoreReadiness([0, 2, 3, 2, 1])).toBe(8);
    expect(scoreReadiness([0, 0, 0, 0, 0])).toBe(0);
  });
});

describe("getReadinessBand", () => {
  it("returns the low-urgency band for a low score", () => {
    expect(getReadinessBand(0).label).toBe("Low urgency");
    expect(getReadinessBand(3).label).toBe("Low urgency");
  });

  it("returns the mid band for a mid score", () => {
    expect(getReadinessBand(4).label).toBe("Worth investigating");
    expect(getReadinessBand(8).label).toBe("Worth investigating");
  });

  it("returns the top band for a high score", () => {
    expect(getReadinessBand(9).label).toBe("Strong case for a connected system");
    expect(getReadinessBand(14).label).toBe("Strong case for a connected system");
  });

  it("every band's max score is reachable and bands cover the full range with no gaps", () => {
    const maxPossible = readinessQuestions.reduce(
      (sum, q) => sum + Math.max(...q.options.map((o) => o.points)),
      0,
    );
    const highestBandMax = Math.max(...readinessBands.map((b) => b.maxScore));
    expect(highestBandMax).toBe(maxPossible);

    for (let score = 0; score <= maxPossible; score++) {
      expect(() => getReadinessBand(score)).not.toThrow();
      expect(getReadinessBand(score)).toBeDefined();
    }
  });
});
