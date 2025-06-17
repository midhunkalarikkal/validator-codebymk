
export interface validateUserNameInterface {
    minimumLength?: number;
    maximumLength?: number;
    uppercase?: boolean;
    digits?: boolean;
    specialCharacters?: boolean;
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

export type TestCase = {
  input: [string, validateUserNameInterface?];
  expected: string;
};