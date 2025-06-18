import { validateFullname } from "../../userValidator";
import { testCheckLoop } from "../../utils/testCheckLoop";
import { TestCase, validateFullnameInterface } from "../../utils/interface";

const testCases: TestCase<string, validateFullnameInterface>[] = [
  {
    question: "Min length check (default minLength 6)",
    input: ["Mid"],
    expected: "Fullname must be at least 6 characters long.",
  },
  {
    question: "Max length check (default maxLength 30)",
    input: ["M".repeat(31)],
    expected: "Fullname must not exceed 30 characters.",
  },
  {
    question: "Uppercase not allowed",
    input: ["Midhun Kalarikkal", { uppercase: false }],
    expected: "Uppercase letters are not allowed in fullname.",
  },
  {
    question: "Uppercase allowed",
    input: ["Midhun Kalarikkal", { uppercase: true }],
    expected: "Valid.",
  },
  {
    question: "Digits not allowed",
    input: ["midhun kalarikkal1"],
    expected: "Digits are not allowed in fullname.",
  },
  {
    question: "Special characters not allowed",
    input: ["midhun@kalarikkal"],
    expected: "Special characters are not allowed in fullname.",
  },
  {
    question: "Space allowed",
    input: ["midhun kalarikkal", { allowSpace: true }],
    expected: "Valid.",
  },
  {
    question: "Space not allowed",
    input: ["midhun kalarikkal", { allowSpace: false }],
    expected: "Spaces are not allowed in fullname.",
  },
  {
    question: "Lowercase only, no space",
    input: ["midhunkalarikkal", { uppercase: false, allowSpace: false }],
    expected: "Valid.",
  },
  {
    question: "Mixed case, spaces allowed",
    input: ["Midhun Kalarikkal", { uppercase: true, allowSpace: true }],
    expected: "Valid.",
  },
  {
    question: "Lowercase with space, space not allowed",
    input: ["midhun kalarikkal", { uppercase: false, allowSpace: false }],
    expected: "Spaces are not allowed in fullname.",
  },
  {
    question: "Lowercase name with no rules (default valid)",
    input: ["midhunkalarikkal"],
    expected: "Valid.",
  },
  {
    question: "Special character with space allowed",
    input: ["midhun@kalarikkal", { allowSpace: true }],
    expected: "Special characters are not allowed in fullname.",
  },
  {
    question: "Name with special character at end and space allowed",
    input: ["Midhun @", { allowSpace: true }],
    expected: "Special characters are not allowed in fullname.",
  },
  {
    question: "Valid name with exact minimum length",
    input: ["midhun"],
    expected: "Valid.",
  },
];

testCheckLoop(testCases, "Fullname", validateFullname);
