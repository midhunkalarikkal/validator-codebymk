import { testCheckLoop } from "../../utils/testCheckLoop";
import { TestCase, ValidateOtpInterface } from "../../utils/interface";
import { validateOtp } from "../../userValidator/user.otp.validator";

const testCases: TestCase<string, ValidateOtpInterface>[] = [
  {
    description: "Valid OTP of 4 digits using default options",
    input: ["1234"],
    expected: "Valid.",
  },
  {
    description: "Valid OTP of 6 digits when length is set to 6",
    input: ["123456", { length: 6 }],
    expected: "Valid.",
  },
  {
    description: "OTP is shorter than default length of 4",
    input: ["12"],
    expected: "OTP must be 4 characters long.",
  },
  {
    description: "OTP exceeds the specified length of 6 digits",
    input: ["1234567", { length: 6 }],
    expected: "OTP must be 6 characters long.",
  },
  {
    description: "OTP contains alphabets when alphabets are not allowed",
    input: ["12ab"],
    expected: "Alphabets are not allowed in OTP.",
  },
  {
    description: "OTP contains alphabets and alphabets are allowed",
    input: ["ab12", { alphabets: true }],
    expected: "Valid.",
  },
  {
    description: "OTP with alphabets and length of 10 is valid",
    input: ["ab12efgh11", { length: 10, alphabets: true }],
    expected: "Valid.",
  },
  {
    description: "OTP contains special character and should be invalid",
    input: ["12@4"],
    expected: "Special characters are not allowed in OTP.",
  },
  {
    description: "OTP is an empty string",
    input: [""],
    expected: "Give an OTP.",
  },
  {
    description: "OTP is a number instead of a string",
    input: [1234 as any],
    expected: "OTP must be a string.",
  },
  {
    description: "OTP with 5 characters and alphabets allowed",
    input: ["1a2b3", { alphabets: true, length: 5 }],
    expected: "Valid.",
  },
  {
    description: "OTP with exactly 8 digits and length set to 8",
    input: ["12345678", { length: 8 }],
    expected: "Valid.",
  },
  {
    description: "OTP is shorter than the custom length of 5",
    input: ["123", { length: 5 }],
    expected: "OTP must be 5 characters long.",
  },
  {
    description: "OTP is longer than the custom length of 6",
    input: ["1234567", { length: 6 }],
    expected: "OTP must be 6 characters long.",
  },
];

testCheckLoop(testCases, "OTP", validateOtp);
