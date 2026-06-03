export function returnArrayPlaceholder(arrayLength: number, fillWithIndex: boolean = true) {
    if (isNaN(arrayLength) || arrayLength < 0) {
        throw new Error(`Array Length but be a valid, positive number revieved ${arrayLength}`);
    }
    const array = Array.from({ length: arrayLength }, (_, index) => fillWithIndex ? index : undefined);
    return array;
}