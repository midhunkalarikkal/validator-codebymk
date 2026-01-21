// Common interface for the validate function options props
interface CommonInterface {
    minLength?: number;
    maxLength?: number;
}

// Common return interface for validation functions
export interface CommonReturn {
    status: boolean;
    message: string;
}

// rules array interface for the validation function
export interface RuleCheck {
    active: boolean;
    test: RegExp;
    message: string;
}

// testcases type
export type TestCase<Value = any, Options = undefined> = {
  description?: string;
  input: Options extends undefined ? Value : [Value, Options?];
  expected: string;
  expectedPoint?: number;
};


//// **** User Validation **** \\\\

//  User usernamae validation function interface
export interface ValidateUsernameameInterface extends CommonInterface {
    uppercase?: boolean;
    digits?: boolean;
    specialCharacters?: boolean;
    allowSpace?: boolean;
}

// User fullname validation function interface
export interface ValidateFullnameInterface extends CommonInterface {
    uppercase?: boolean;
    allowSpace?: boolean;
}

// User otp validation function interface
export interface ValidateOtpInterface {
    length?: number
    alphabets?: boolean;
}

// User phone validation function interface
export interface ValidatePhoneOptions {
    minLength?: number,
    maxLength?: number,
    requireCountryCode?: boolean;
    countryName?: string;
}

// User password validation function interface
export interface ValidatePasswordInterface extends CommonInterface{
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

// User passwrod validation function return interface
export interface ValidatePasswordReturn extends CommonReturn {
    point?: number;
}

