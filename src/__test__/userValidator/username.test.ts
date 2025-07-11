import { validateUsername } from "../../userValidator";
import { testCheckLoop } from "../../utils/testCheckLoop";
import { TestCase, ValidateUsernameameInterface } from "../../utils/interface";

const testCases: TestCase<string, ValidateUsernameameInterface>[] = [
  {
    description: "Too short username with default minLength 4",
    input: ["ab"],
    expected: "Username must be at least 4 characters long.",
  },
  {
    description: "Too long username with default maxLength 30",
    input: ["a".repeat(31)],
    expected: "Username must not exceed 30 characters.",
  },
  {
    description: "Uppercase not allowed by default",
    input: ["Midhun"],
    expected: "Uppercase letters are not allowed in username.",
  },
  {
    description: "Lowercase only, valid when uppercase is false",
    input: ["midhun", { uppercase: false }],
    expected: "Valid.",
  },
  {
    description: "Digits used but not allowed",
    input: ["midhun1", { digits: false }],
    expected: "Digits are not allowed in username.",
  },
  {
    description: "Digits not allowed, but not used",
    input: ["midhun", { digits: false }],
    expected: "Valid.",
  },
  {
    description: "Special character used but not allowed",
    input: ["midhun@", { specialCharacters: false }],
    expected: "Special characters are not allowed in username.",
  },
  {
    description: "Invalid special character used even though specialCharacters allowed",
    input: ["midhun$", { specialCharacters: true }],
    expected: "Only '.', '-', and '_' are allowed as special characters.",
  },
  {
    description: "Valid special character '_' used with specialCharacters allowed",
    input: ["midhun_", { specialCharacters: true }],
    expected: "Valid.",
  },
  {
    description: "Valid username with uppercase, digits, and allowed special characters",
    input: ["Midhun1_", { uppercase: true, digits: true, specialCharacters: true }],
    expected: "Valid.",
  },
  {
    description: "Invalid special character '@' used when specialCharacters are allowed",
    input: ["Midhun1@", { uppercase: true, digits: true, specialCharacters: true }],
    expected: "Only '.', '-', and '_' are allowed as special characters.",
  },
  {
    description: "Username with space",
    input: ["midh un"],
    expected: "Spaces are not allowed in username.",
  },
  {
    description: "Empty username string",
    input: [""],
    expected: "Give a username.",
  },
  {
    description: "Username is not a string",
    input: [123 as any],
    expected: "Username must be a string.",
  },
  {
    description: "Fully valid lowercase username with digits and specialCharacters",
    input: ["midhun123_", { digits: true, specialCharacters: true }],
    expected: "Valid.",
  },
  {
    description: "Fully valid username with all config enabled",
    input: ["Mid_hun-22", { uppercase: true, digits: true, specialCharacters: true }],
    expected: "Valid.",
  },
];

testCheckLoop(testCases, "Username", validateUsername);
