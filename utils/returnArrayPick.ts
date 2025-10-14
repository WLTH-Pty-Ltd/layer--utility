export function returnArrayPick<T>(array: Array<any>, key: string | number) {
  return array.map((item) => item[key]) as Array<T>;
}
