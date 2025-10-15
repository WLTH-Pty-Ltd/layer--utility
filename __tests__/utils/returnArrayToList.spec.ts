import { returnArrayToList } from "../../utils/returnArrayToList";
import { describe, it, expect } from "vitest";

describe("returnArrayToList", () => {
  const names = ["dan", "ariel", "drei"];

  it("should format the passed array of strings as a short list", () => {
    const result = returnArrayToList(names);
    expect(result).toEqual("dan, ariel and drei");
  });

  it("should format the passed array of strings as a short list (capitalized)", () => {
    const result = returnArrayToList(names, true);
    expect(result).toEqual("Dan, Ariel and Drei");
  });

  it("should capitalize correctly even when word casing is mixed", () => {
    const result = returnArrayToList(["NUXT", "VuE", "laraVEl"], true);
    expect(result).toBe("Nuxt, Vue and Laravel");
  });

  it("should handle single-item arrays correctly", () => {
    const result = returnArrayToList(["forms"]);
    expect(result).toBe("forms");
  });

  it("should return empty string for an empty array", () => {
    const result = returnArrayToList([]);
    expect(result).toBe("");
  });
});
