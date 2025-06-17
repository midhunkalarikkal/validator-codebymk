import { TestCase, validateUsernameameInterface } from "../../interface";
import { validateUsername } from "../../userValidator";

const testCases: TestCase<validateUsernameameInterface>[]  = [
  {
    input: ["ab"],
    expected: "Username must be at least 4 characters long.",
  },
  {
    input: ["a".repeat(31)],
    expected: "Username must not exceed 30 characters.",
  },
  {
    input: ["Midhun"],
    expected: "Uppercase letters are not allowed in username.",
  },
  {
    input: ["midhun", { uppercase: false }],
    expected: "Valid username.",
  },
  {
    input: ["midhun1", { digits: false }],
    expected: "Digits are not allowed in username.",
  },
  {
    input: ["midhun", { digits: false }],
    expected: "Valid username.",
  },
  {
    input: ["midhun@", { specialCharacters: false }],
    expected: "Special characters are not allowed in username.",
  },
  {
    input: ["midhun$", { specialCharacters: true }],
    expected: "Only '.', '-', and '_' are allowed as special characters.",
  },
  {
    input: ["midhun_", { specialCharacters: true }],
    expected: "Valid username.",
  },
  {
    input: ["Midhun1_", { uppercase: true, digits: true, specialCharacters: true }],
    expected: "Valid username.",
  },
  {
    input: ["Midhun1@", { uppercase: true, digits: true, specialCharacters: true }],
    expected: "Only '.', '-', and '_' are allowed as special characters.",
  },
  {
  input: ["midh un"],
  expected: "Spaces are not allowed in username.",
},
];

for (const [i, testCase] of testCases.entries()) {
  const [username, options] = testCase.input;
  const result = validateUsername(username, options);
  const status = typeof result === "string" ? result : result.message;

  console.log(
    `Test ${i + 1}:`,
    status === testCase.expected ? "✅ Pass" : "❌ Fail",
    `\n  ➤ Expected: ${testCase.expected}\n  ➤ Got: ${status}\n`
  );
}
