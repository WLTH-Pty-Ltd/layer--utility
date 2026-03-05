/***
 * I'm using Array<any> here to get around a typescript limitation.
 * Ideally I would use Array<string | number | Symbol> but this causes issues with Arrays of interfaces.
 * I could just use Array<unknown> which is _technically_ correct, but means I have to cast everything inside of the for loops
 * Which while _technically_ safer, causes a lot of Typescript jargon. This isn't an especially typescript heavy file and I want to keep the barrier
 * of entry relatively low.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function returnArrayPick<T>(array: Array<any>, key: string | number | Array<string | number>, flatten?: boolean) {
  // This section is for nested arrays, which is the intended entry of this util. Flattening out arrays of arrays, but it will accept regular arrays
  // Mostly to prevent typescript casting upstream
  if (Array.isArray(key)) {
    const newArray = [];

    // This cycles through the array looking for the specificed key. It then grabs the key and it's value and pushes them to the
    // temporary newArray.
    // I could probably replace this with a more efficent two point loop but it would cost readibility and it's typescript, calm down
    for (const item of array) {
      const entry: Partial<T> = {};
      for (const k of key) {
        if (k in item) {
          entry[k as keyof T] = item[k] as T[keyof T];
        }
      }
      // push the entry values to th enew array temporary value
      newArray.push(entry);
    }
    if (flatten) {
      return newArray.flat() as Array<T>
    } else {
      return newArray as Array<T>;
    }
  } else {
    if (flatten) {
      return array.flatMap((item) => item[key]).filter((item) => item) as Array<T>;
    } else {
      return array.map((item) => item[key]).filter((item) => item) as Array<T>;
    }
  }
}
