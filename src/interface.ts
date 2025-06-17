
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



