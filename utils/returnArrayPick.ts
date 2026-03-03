export function returnArrayPick<T>(array: Array<Record<string | number, unknown>>, key: string | number | Array<string | number>, flatten?: boolean) {
  if (Array.isArray(key)) {
    const newArray = [];

    // check each entry of the array
    for (const item of array) {
      const entry: Partial<T> = {};
      // check each key passes as a prop
      for (const k of key) {
        if (k in item) {
          // if array key is in the prop assign it to the entry temporary value
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
