
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

export interface validateUsernameameInterface extends CommonInterface{
    uppercase?: boolean;
    digits?: boolean;
    specialCharacters?: boolean;
}

export interface validateFullnameInterface extends CommonInterface{
    uppercase?: boolean;
    allowSpace?: boolean;
}

export interface validateOtpInterface extends CommonInterface{
  alphabets?: boolean;
}

export interface ValidatePhoneOptions extends CommonInterface {
  requireCountryCode?: boolean;
  countryName?: string;
}

export const countryCodes: Record<string, string> = {
  "India": "+91",
  "United States": "+1",
  "United Kingdom": "+44",
  "Australia": "+61",
  "Germany": "+49",
  "France": "+33",
  "Canada": "+1",
  "China": "+86",
  "Japan": "+81",
  "Brazil": "+55"
};



