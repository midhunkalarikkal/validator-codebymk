import { testCheckLoop } from "../../helper";
import { TestCase, validateUsernameameInterface } from "../../interface";
import { validateUsername } from "../../userValidator";

const testCases: TestCase<validateUsernameameInterface>[] = [
  {
    // ❌ too short
    input: ["ab"],
    expected: "Username must be at least 4 characters long.",
  },
  {
    // ❌ too long
    input: ["a".repeat(31)],
    expected: "Username must not exceed 30 characters.",
  },
  {
    // ❌ uppercase not allowed by default
    input: ["Midhun"],
    expected: "Uppercase letters are not allowed in username.",
  },
  {
    // ✅ lowercase only, valid
    input: ["midhun", { uppercase: false }],
    expected: "Valid.",
  },
  {
    // ❌ digit used but not allowed
    input: ["midhun1", { digits: false }],
    expected: "Digits are not allowed in username.",
  },
  {
    // ✅ valid with digits disabled, but no digits used
    input: ["midhun", { digits: false }],
    expected: "Valid.",
  },
  {
    // ❌ special char used but not allowed
    input: ["midhun@", { specialCharacters: false }],
    expected: "Special characters are not allowed in username.",
  },
  {
    // ❌ invalid special char, only ., -, _ allowed
    input: ["midhun$", { specialCharacters: true }],
    expected: "Only '.', '-', and '_' are allowed as special characters.",
  },
  {
    // ✅ valid special char
    input: ["midhun_", { specialCharacters: true }],
    expected: "Valid.",
  },
  {
    // ✅ fully valid
    input: ["Midhun1_", { uppercase: true, digits: true, specialCharacters: true }],
    expected: "Valid.",
  },
  {
    // ✅ invalid special char @
    input: ["Midhun1@", { uppercase: true, digits: true, specialCharacters: true }],
    expected: "Only '.', '-', and '_' are allowed as special characters.",
  },
  {
    // ❌ contains space
    input: ["midh un"],
    expected: "Spaces are not allowed in username.",
  },
];

testCheckLoop(testCases,"Username", validateUsername);