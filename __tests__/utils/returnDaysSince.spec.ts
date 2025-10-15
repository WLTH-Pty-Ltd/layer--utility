import { returnDaysSince } from "../../utils/returnDaysSince";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

describe("returnDaysSince", () => {
  let realDateNow: () => number;

  beforeEach(() => {
    realDateNow = Date.now; // Save the real Date.now so we can restore later
  });

  afterEach(() => {
    global.Date.now = realDateNow; // Restore original Date.now after each test
  });

  it('should calculate correct number of days from a past date and the "current" date', () => {
    const today = new Date("2025-10-15T00:00:00Z").valueOf();
    global.Date.now = vi.fn(() => today);

    const pastDate = new Date("2025-10-10T00:00:00Z");
    const result = returnDaysSince(pastDate);

    expect(Math.floor(result)).toBe(5);
  });

  it("should accept string date as input", () => {
    const today = new Date("2025-10-15T00:00:00Z").valueOf();
    global.Date.now = vi.fn(() => today);

    const result = returnDaysSince("2025-10-12T00:00:00Z");
    expect(Math.floor(result)).toBe(3);
  });

  it("should return 0 when date is now", () => {
    const today = new Date("2025-10-15T00:00:00Z").valueOf();
    global.Date.now = vi.fn(() => today);

    const result = returnDaysSince("2025-10-15T00:00:00Z");
    expect(Math.floor(result)).toBe(0);
  });
});
