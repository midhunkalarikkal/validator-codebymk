import { validateFullname } from "../../userValidator";
import { TestCase, validateFullnameInterface } from "../../interface";
import { testCheckLoop } from "../../helper";

const testCases: TestCase<validateFullnameInterface>[] = [
    {
    // ❌ Min length check
    input: ["Mid"],
    expected: "Fullname must be at least 6 characters long.",
  },

  {
    // ❌ Max length check
    input: ["M".repeat(31)],
    expected: "Fullname must not exceed 30 characters.",
  },
  
  {
    // ❌ Uppercase not allowed
    input: ["Midhun Kalarikkal", { uppercase: false }],
    expected: "Uppercase letters are not allowed in fullname.",
  },

  {
    // Uppercase allowed
    input: ["Midhun Kalarikkal", { uppercase: true }],
    expected: "Valid.",
  },

  {
    // ❌ Digits not allowed
    input: ["midhun kalarikkal1"],
    expected: "Digits are not allowed in fullname.",
  },

  {
    // ❌ Special characters not allowed
    input: ["midhun@kalarikkal"],
    expected: "Special characters are not allowed in fullname.",
  },

  {
    // ✅ Space allowed
    input: ["midhun kalarikkal", { allowSpace: true }],
    expected: "Valid.",
  },

  {
    // ❌ Space not allowed
    input: ["midhun kalarikkal", { allowSpace: false }],
    expected: "Spaces are not allowed in fullname.",
  },

  {
    // ✅ Lowercase, no space
    input: ["midhunkalarikkal", { uppercase: false, allowSpace: false }],
    expected: "Valid.",
  },

  {
    // ✅ Mixed cases with all allowed
    input: ["Midhun Kalarikkal", { uppercase: true, allowSpace: true }],
    expected: "Valid.",
  },

  {
    // ❌ Lowercase name with space not allowed
    input: ["midhun kalarikkal", { uppercase: false, allowSpace: false }],
    expected: "Spaces are not allowed in fullname.",
  },

  {
    // ❌ Name with only letters (long)
    input: ["midhunkalarikkal"],
    expected: "Valid.",
  },

  {
    // ❌ Name with special character and space allowed
    input: ["midhun@kalarikkal", { allowSpace: true }],
    expected: "Special characters are not allowed in fullname.",
  },

  {
    // ❌ Name with only spaces
    input: ["Midhun @", { allowSpace: true }],
    expected: "Special characters are not allowed in fullname.",
  },

  {
    // ✅ Valid name with just enough length
    input: ["midhun"],
    expected: "Valid.",
  }
];


testCheckLoop(testCases, validateFullname)
