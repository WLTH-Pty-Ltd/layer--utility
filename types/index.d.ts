declare global {
  export interface Countdown {
    readonly now: number | Date | null;
    readonly expiry: number | Date | null;
    readonly days: number | string | null;
    readonly hours: number | string | null;
    readonly minutes: number | string | null;
    readonly seconds: number | string | null;
  }
  
  export interface PasswordValidity {
    readonly isValid: boolean;
    readonly isValidLength: boolean;
    readonly containsNumber: boolean;
    readonly containsLowercase: boolean;
    readonly containsUppercase: boolean;
    readonly containsSymbol: boolean;
    readonly containsIllegalWords: Array<IllegalWordCheck>;
    readonly matchesChallenge: boolean;
  }
  
  export interface IllegalWordCheck {
    check: string | undefined;
    value: string;
    passes?: boolean;
  }
}

export {}