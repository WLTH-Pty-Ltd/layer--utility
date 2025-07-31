export function returnCapitalized(word: string | undefined) {
  if (word) {
    return word.toString().charAt(0).toUpperCase() + word.slice(1);
  } else return word
}