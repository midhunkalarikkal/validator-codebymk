import { validatePassword } from "../../userValidator";
import { testCheckLoop } from "../../utils/testCheckLoop";
import { TestCase, ValidatePasswordInterface } from "../../utils/interface";

const testCases: TestCase<string, ValidatePasswordInterface>[] = [
  {
    description: "Password is too short (below minLength 6)",
    input: ["abc", { minLength: 6, returnPoint: true }],
    expected: "Password must be at least 6 characters long.",
    expectedPoint: 25 // Only lowercase is present
  },
  {
    description: "Password exceeds maxLength of 50 characters",
    input: ["a".repeat(51), { maxLength: 50, returnPoint: true }],
    expected: "Password must not exceed 50 characters.",
    expectedPoint: 25 // Only lowercase
  },
  {
    description: "Password missing required lowercase letters",
    input: ["ABC123@", { minLowercase: 1, returnPoint: true }],
    expected: "Password must contain at least 1 lowercase letter(s).",
    expectedPoint: 75 // Uppercase, digit, special present
  },
  {
    description: "Password missing required uppercase letters",
    input: ["abc123@", { minUppercase: 1, returnPoint: true }],
    expected: "Password must contain at least 1 uppercase letter(s).",
    expectedPoint: 75 // Lowercase, digit, special present
  },
  {
    description: "Password missing required special characters",
    input: ["Abc1234", { minSpecialCharacter: 1, returnPoint: true }],
    expected: "Password must contain at least 1 special character(s).",
    expectedPoint: 75 // Lowercase, uppercase, digit present
  },
  {
    description: "Password meets all minimum requirements",
    input: ["Abc@123", {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minSpecialCharacter: 1,
      minDigits: 1,
      returnPoint: true
    }],
    expected: "Valid.",
    expectedPoint: 100
  },
  {
    description: "Password with custom rules passes validation",
    input: ["Midhun@2024", {
      minLength: 8,
      maxLength: 20,
      minLowercase: 2,
      minUppercase: 1,
      minSpecialCharacter: 1,
      minDigits: 1,
      returnPoint: true
    }],
    expected: "Valid.",
    expectedPoint: 100
  },
  {
    description: "Password with scoring system enabled returns Valid",
    input: ["Test@123", {
      returnPoint: true,
      pointsForUppercase: 25,
      pointsForLowercase: 25,
      pointsForSpecialCharacter: 25,
      pointsForDigits: 25,
      minUppercase: 1,
      minLowercase: 1,
      minSpecialCharacter: 1,
      minDigits: 1
    }],
    expected: "Valid.",
    expectedPoint: 100
  },
  {
    description: "Password with only digits and special characters passes",
    input: ["1234@", {
      minLowercase: 0,
      minUppercase: 0,
      minSpecialCharacter: 1,
      minDigits: 4,
      minLength: 5,
      returnPoint: true
    }],
    expected: "Valid.",
    expectedPoint: 50
  },
  {
    description: "Password missing digits when required",
    input: ["Test@Pass", {
      minDigits: 1,
      returnPoint: true,
      pointsForDigits: 25
    }],
    expected: "Password must contain at least 1 digit(s).",
    expectedPoint: 75 // Uppercase, lowercase, special are present
  },
  {
    description: "Empty password with point scoring enabled returns error",
    input: ["", { returnPoint: true }],
    expected: "Password must be a valid string.",
    expectedPoint: 0
  },
  {
    description: "Password too short without any options passed",
    input: ["123", { returnPoint: true }],
    expected: "Password must be at least 6 characters long.",
    expectedPoint: 25 // Digits only
  },
  {
    description: "Strong password passes with default configuration",
    input: ["Aa@123456"],
    expected: "Valid."
  },
  {
    description: "Password is not a string (number given)",
    input: [123456 as any],
    expected: "Password must be a valid string."
  },
  {
    description: "Strong password with returnPoint enabled returns Valid",
    input: ["Midhun123", {
      returnPoint: true,
      minSpecialCharacter: 0
    }],
    expected: "Valid.",
    expectedPoint: 100
  },
  {
    description: "Password with only uppercase letters",
    input: ["HELLO", {
      returnPoint: true,
      minLowercase: 0,
      minDigits: 0,
      minSpecialCharacter: 0
    }],
    expected: "Password must be at least 6 characters long.",
    expectedPoint: 25 // Only uppercase
  },
  {
    description: "Password meets only lowercase and digit constraints, returns 50 points",
    input: ["abc123", {
      returnPoint: true,
      minLowercase: 1,
      minUppercase: 1,
      minDigits: 1,
      minSpecialCharacter: 1
    }],
    expected: "Password must contain at least 1 uppercase letter(s).",
    expectedPoint: 50
  },
  {
    description: "Password with only special characters",
    input: ["@!$", {
      returnPoint: true,
      minLength: 3,
      minLowercase: 0,
      minUppercase: 0,
      minDigits: 0
    }],
    expected: "Valid.",
    expectedPoint: 25
  }
];

testCheckLoop(testCases, "Password", validatePassword);
