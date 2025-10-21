export function returnCapitalized(
  word: string | undefined,
  applyToEachWord: boolean = false
) {
  if (word) {
    if (applyToEachWord) {
      // This would only handle single space. If we want to handle multiple spaces, tabs, or newlines,
      // we can change this to `word.split(/\s+/)`. But this would further complicate this function
      // than required due to formatting consistencies.
      const words: string[] = word.split(" ");
      if (words.length > 1) {
        const capitalizedWords = words.map((w: string) => {
          if (w) return w.charAt(0).toUpperCase() + w.slice(1);
          else return "";
        });
        return capitalizedWords.join(" ");
      }
    }
    return word.toString().charAt(0).toUpperCase() + word.slice(1);
  } else return word;
}
