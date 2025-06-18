
interface CommonInterface {
    minLength?: number;
    maxLength?: number;
}

export interface CommonReturn {
    status: boolean;
    message: string;
}

export interface RuleCheck {
    active: boolean;
    test: RegExp;
    message: string;
}

export interface TestCase<T> {
    input: [string, T?];
    expected: string;
}

//// **** User Validation **** \\\\

export interface validateUsernameameInterface extends CommonInterface {
    uppercase?: boolean;
    digits?: boolean;
    specialCharacters?: boolean;
}

export interface validateFullnameInterface extends CommonInterface {
    uppercase?: boolean;
    allowSpace?: boolean;
}

export interface validateOtpInterface {
    length?: number
    alphabets?: boolean;
}

export interface ValidatePhoneOptions {
    length?: number;
    requireCountryCode?: boolean;
    countryName?: string;
}

export interface validatePasswordInterface extends CommonInterface{
  minLowercase?: number;
  minUppercase?: number;
  minSpecialCharacter?: number;
  minDigits?: number;
  pointsForUppercase?: number; // 25 / 100
  pointsForLowercase?: number; // 25 / 100
  pointsForSpecialCharacter?: number; // 25 / 100
  pointsForDigits?: number; // 25 / 100
  returnPoint?: boolean;
}


