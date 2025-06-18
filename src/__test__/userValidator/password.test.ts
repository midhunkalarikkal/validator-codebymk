import { testCheckLoop } from "../../utils/testCheckLoop";
import { TestCase, validatePasswordInterface } from "../../utils/interface";
import { validatePassword } from "../../userValidator/user.password.validator";

const testCases: TestCase<string, validatePasswordInterface>[] = [
  {
    description: "Password is too short (below minLength 6)",
    input: ["abc", { minLength: 6 }],
    expected: "Password must be at least 6 characters long.",
  },
  {
    description: "Password exceeds maxLength of 50 characters",
    input: ["a".repeat(51), { maxLength: 50 }],
    expected: "Password must not exceed 50 characters.",
  },
  {
    description: "Password missing required lowercase letters",
    input: ["ABC123@", { minLowercase: 1 }],
    expected: "Password must contain at least 1 lowercase letter(s).",
  },
  {
    description: "Password missing required uppercase letters",
    input: ["abc123@", { minUppercase: 1 }],
    expected: "Password must contain at least 1 uppercase letter(s).",
  },
  {
    description: "Password missing required special characters",
    input: ["Abc1234", { minSpecialCharacter: 1 }],
    expected: "Password must contain at least 1 special character(s).",
  },
  {
    description: "Password meets all minimum requirements",
    input: ["Abc@123", {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minSpecialCharacter: 1,
      minDigits: 1,
    }],
    expected: "Valid.",
  },
  {
    description: "Password with custom length and character rules passes validation",
    input: ["Midhun@2024", {
      minLength: 8,
      maxLength: 20,
      minLowercase: 2,
      minUppercase: 1,
      minSpecialCharacter: 1,
      minDigits: 1,
    }],
    expected: "Valid.",
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
      minDigits: 1,
    }],
    expected: "Valid.",
  },
  {
    description: "Password with only digits and special characters passes",
    input: ["1234@", {
      minLowercase: 0,
      minUppercase: 0,
      minSpecialCharacter: 1,
      minDigits: 4,
      minLength: 5,
    }],
    expected: "Valid.",
  },
  {
    description: "Password missing digits when required",
    input: ["Test@Pass", {
      minDigits: 1,
      returnPoint: true,
      pointsForDigits: 25,
    }],
    expected: "Password must contain at least 1 digit(s).",
  },
  {
    description: "Empty password with point scoring enabled returns error",
    input: ["", {
      returnPoint: true,
    }],
    expected: "Password must be a valid string.",
  },
  {
    description: "Password too short without any options passed",
    input: ["123"],
    expected: "Password must be at least 6 characters long.",
  },
  {
    description: "Strong password passes with default configuration",
    input: ["Aa@123456"],
    expected: "Valid.",
  },
  {
    description: "Password is not a string (number given)",
    input: [123456 as any],
    expected: "Password must be a valid string.",
  },
  {
    description: "Strong password with returnPoint enabled returns Valid",
    input: ["Midhun@123", { returnPoint: true }],
    expected: "Valid.",
  },
];

testCheckLoop(testCases, "Password", validatePassword);
