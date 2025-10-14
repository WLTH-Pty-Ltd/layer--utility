import { returnArrayPick } from "../../utils/returnArrayPick";
import { describe, it, expect } from "vitest";

describe("returnArrayPick", () => {
  const users = [
    { id: 1, name: "Dan", email: "dan@wlth.com" },
    { id: 2, name: "Ariel", email: "ariel@wlth.com" },
    { id: 3, name: "Drei", email: "drei@wlth.com" },
  ];

  describe("returnArrayPick", () => {
    it('should pick the "name" property from the array', () => {
      const names = returnArrayPick<string>(users, "name");
      expect(names).toEqual(["Dan", "Ariel", "Drei"]);
    });

    it('should pick the "id" property from the array', () => {
      const ids = returnArrayPick<number>(users, "id");
      expect(ids).toEqual([1, 2, 3]);
    });

    it("should return an array of undefined for a non-existent key", () => {
      const nonExistent = returnArrayPick<undefined>(users, "z");
      expect(nonExistent).toEqual([undefined, undefined, undefined]);
    });

    it("should return an empty array when the array is empty", () => {
      const result = returnArrayPick<string>([], "name");
      expect(result).toEqual([]);
    });
  });
});
