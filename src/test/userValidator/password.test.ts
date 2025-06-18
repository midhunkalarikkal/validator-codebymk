import { testCheckLoop } from "../../helper";
import { TestCase, validatePasswordInterface } from "../../interface";
import { validatePassword } from "../../userValidator/user.password.validator";

const testCases: TestCase<validatePasswordInterface>[] = [
  {
    // ❌ too short
    input: ["abc", { minLength: 6 }],
    expected: "Password must be at least 6 characters long.",
  },
  {
    // ❌ too long
    input: ["a".repeat(51), { maxLength: 50 }],
    expected: "Password must not exceed 50 characters.",
  },
  {
    // ❌ missing min lowercase
    input: ["ABC123@", { minLowercase: 1 }],
    expected: "Password must contain at least 1 lowercase letter(s).",
  },
  {
    // ❌ missing min uppercase
    input: ["abc123@", { minUppercase: 1 }],
    expected: "Password must contain at least 1 uppercase letter(s).",
  },
  {
    // ❌ missing special character
    input: ["Abc1234", { minSpecialCharacter: 1 }],
    expected: "Password must contain at least 1 special character(s).",
  },
  {
    // ✅ minimum requirements passed
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
    // ✅ custom min/max length and all requirements met
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
    // ✅ return points
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
    // ✅ only numbers and specials
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
    // ❌ missing digit when counted
    input: ["Test@Pass", {
      minDigits: 1,
      returnPoint: true,
      pointsForDigits: 25,
    }],
    expected: "Password must contain at least 1 digit(s).",
  },
  {
    // ❌ missing all and return points
    input: ["", {
      returnPoint: true,
    }],
    expected: "Password must be a valid string.",
  },
  {
    // ❌ no options passed, but has invalid short length
    input: ["123"],
    expected: "Password must be at least 6 characters long.",
  },
  {
    // ✅ default config should pass strong password
    input: ["Aa@123456"],
    expected: "Valid.",
  },
  {
    // ❌ not a string
    input: [123456 as any],
    expected: "Password must be a valid string.",
  },
  {
    // ✅ default config should pass strong password
    input: ["Midhun@123", {returnPoint: true}],
    expected: "Valid.",
  },
];

testCheckLoop(testCases, validatePassword);
