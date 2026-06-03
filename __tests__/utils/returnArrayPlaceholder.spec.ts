import { returnArrayPlaceholder } from "../../utils/returnArrayPlaceholder";
import { describe, it, expect } from "vitest";

describe("returnArrayPlaceholder", () => {
  it("Should generate an array matching the length of the first param", () => {
    const result = returnArrayPlaceholder(5);
    expect(result.length).toEqual(5);
  });

  it("Should generate the index for each item if the second param is not set", () => {
    const result = returnArrayPlaceholder(3);
    expect(result).toEqual([0,1,2]);
  })

  it("Should generate undefined for each item if the second param is false", () => {
    const result = returnArrayPlaceholder(3, false);
    expect(result).toEqual([undefined, undefined, undefined])
  })

  it("Should error if negative number is passed for length", () => {
    expect(() => returnArrayPlaceholder(-10)).toThrowError();
  })

  it("Should return an empty array when zero is passed as the length", () => {
    const result = returnArrayPlaceholder(0);
    expect(result).toEqual([]);
  })
});
