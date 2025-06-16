import { defu } from 'defu';

export function returnCurrencyFormat(amount: number, options?: Intl.NumberFormatOptions) {
    const pattern = /^-?\d+(\.\d+)?$/;
    if (!pattern.test(amount.toString())) throw new Error(`Amount is invalid. Recieved - ${amount}`);

    const mergedOptions: Intl.NumberFormatOptions = defu(options, { style: 'currency', currency: 'AUD'} as Intl.NumberFormatOptions)
    
    return new Intl.NumberFormat("en-AU", mergedOptions).format(amount);
  }