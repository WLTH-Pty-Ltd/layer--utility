export function returnRemoveSpecialCharacters(input: string, replacementChar?: string) {
    if (!input) return input;
    if (replacementChar) return input.replace(/[^a-zA-Z0-9]/g, replacementChar);
    else return input.replace(/[^a-zA-Z0-9]/g, '');
}