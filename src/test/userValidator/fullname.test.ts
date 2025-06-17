import { validateFullname } from "../../userValidator";
import { TestCase, validateFullnameInterface } from "../../interface";

const testCases: TestCase<validateFullnameInterface>[] = [
  // Min length check
  {
    input: ["Mid"],
    expected: "Fullname must be at least 6 characters long.",
  },

  // Max length check
  {
    input: ["M".repeat(31)],
    expected: "Fullname must not exceed 30 characters.",
  },

  // Uppercase not allowed
  {
    input: ["Midhun Kalarikkal", { uppercase: false }],
    expected: "Uppercase letters are not allowed in fullname.",
  },

  // Uppercase allowed
  {
    input: ["Midhun Kalarikkal", { uppercase: true }],
    expected: "Valid fullname.",
  },

  // Digits not allowed
  {
    input: ["midhun kalarikkal1"],
    expected: "Digits are not allowed in fullname.",
  },

  // Special characters not allowed
  {
    input: ["midhun@kalarikkal"],
    expected: "Special characters are not allowed in fullname.",
  },

  // Space allowed
  {
    input: ["midhun kalarikkal", { allowSpace: true }],
    expected: "Valid fullname.",
  },

  // Space not allowed
  {
    input: ["midhun kalarikkal", { allowSpace: false }],
    expected: "Spaces are not allowed in fullname.",
  },

  // Lowercase, no space
  {
    input: ["midhunkalarikkal", { uppercase: false, allowSpace: false }],
    expected: "Valid fullname.",
  },

  // Mixed cases with all allowed
  {
    input: ["Midhun Kalarikkal", { uppercase: true, allowSpace: true }],
    expected: "Valid fullname.",
  },

  // Lowercase name with space not allowed
  {
    input: ["midhun kalarikkal", { uppercase: false, allowSpace: false }],
    expected: "Spaces are not allowed in fullname.",
  },

  // Name with only letters (long)
  {
    input: ["midhunkalarikkal"],
    expected: "Valid fullname.",
  },

  // Name with special character and space allowed
  {
    input: ["midhun@kalarikkal", { allowSpace: true }],
    expected: "Special characters are not allowed in fullname.",
  },

  // Name with only spaces
  {
    input: ["Midhun @", { allowSpace: true }],
    expected: "Special characters are not allowed in fullname.",
  },

  // Valid name with just enough length
  {
    input: ["midhun"],
    expected: "Valid fullname.",
  }
];


for (const [i, testCase] of testCases.entries()) {
  const [fullname, options] = testCase.input;
  const result = validateFullname(fullname, options);
  const status = result.message;

  console.log(
    `Test ${i + 1}:`,
    status === testCase.expected ? "✅ Pass" : "❌ Fail",
    `\n  ➤ Expected: ${testCase.expected}\n  ➤ Got: ${status}\n`
  );
}
