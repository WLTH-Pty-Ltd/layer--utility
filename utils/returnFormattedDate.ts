import { defu } from "defu";

export function returnFormattedDate(date: string, options?: Intl.DateTimeFormatOptions) {
    const mergedOptions: Intl.DateTimeFormatOptions = defu(options, { dateStyle: 'medium' } as Intl.DateTimeFormatOptions);

    return new Date(date).toLocaleDateString("EN-AU", mergedOptions);
  }