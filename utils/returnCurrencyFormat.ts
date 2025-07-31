import { defu } from 'defu';

export function returnCurrencyFormat(amount: Numberish, options?: Intl.NumberFormatOptions) {
  if (!amount) return amount.toString();
  const pattern = /^-?\d+(\.\d+)?$/;
  if (!pattern.test(amount.toString())) throw new Error(`Amount is invalid. Recieved - ${amount}`);

  const mergedOptions: Intl.NumberFormatOptions = defu(options, { style: 'currency', currency: 'AUD' } as Intl.NumberFormatOptions)

  return new Intl.NumberFormat("en-AU", mergedOptions).format(parseInt(amount.toString()));
}