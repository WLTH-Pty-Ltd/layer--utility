declare global {
  export interface Countdown {
    start: number | Date;
    expiry: number | Date;
    days: number | string;
    hours: number | string;
    minutes: number | string;
    seconds: number | string;
    expired: boolean;
    total: CountdownTotal;
  }

  export interface CountdownTotal {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  export interface PasswordValidity {
    isValid: boolean;
    isValidLength: boolean;
    containsNumber: boolean;
    containsLowercase: boolean;
    containsUppercase: boolean;
    containsSymbol: boolean;
    containsIllegalWords: Array<IllegalWordCheck>;
    matchesChallenge: boolean;
  }

  export interface IllegalWordCheck {
    check: string | undefined;
    value: string;
    passes?: boolean;
  }
}

export { }