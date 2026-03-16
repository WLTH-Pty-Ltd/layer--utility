export type DropdownPosition = 'above' | 'below';
export interface DropdownOptions {
    items: {
        count: number;
        size: number;
    }
};

export function returnDropdownPosition(element: HTMLElement, options?: Partial<DropdownOptions>): DropdownPosition {
    let recommendedDropdownPosition: DropdownPosition = 'below';
    const itemCount = options?.items?.count ?? 5;
    const itemSize = options?.items?.size ?? 55;

    const elementRect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const estimatedDropdownHeight = itemCount * itemSize;

    const spaceBelow = viewportHeight - elementRect.bottom;
    const spaceAbove = elementRect.top;

    if ((spaceBelow < estimatedDropdownHeight) && (spaceAbove > estimatedDropdownHeight)) {
        recommendedDropdownPosition = 'above';
    } else {
        recommendedDropdownPosition = 'below';
    }
    return recommendedDropdownPosition
}