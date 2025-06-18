import { testCheckLoop } from "../../utils/testCheckLoop";
import { TestCase, ValidatePhoneOptions } from "../../utils/interface";
import { validatePhone } from "../../userValidator/user.phone.validator";

const testCases: TestCase<string, ValidatePhoneOptions>[] = [
  {
    question: "Valid 10-digit number with default config",
    input: ["9876543210"],
    expected: "Valid phone number.",
  },
  {
    question: "Phone number with alphabets",
    input: ["98765abcde"],
    expected: "Phone number should only contain digits.",
  },
  {
    question: "Phone number with special characters",
    input: ["98765-43210"],
    expected: "Phone number should only contain digits.",
  },
  {
    question: "Phone number is too short",
    input: ["12345"],
    expected: "Phone number must be 10 digits.",
  },
  {
    question: "Phone number is too long",
    input: ["1234567890123"],
    expected: "Phone number must be 10 digits.",
  },
  {
    question: "Custom length (6), valid input",
    input: ["123456", { length: 6 }],
    expected: "Valid phone number.",
  },
  {
    question: "Custom length (6), too short",
    input: ["123", { length: 6 }],
    expected: "Phone number must be 6 digits.",
  },
  {
    question: "Country code required but not provided",
    input: ["9876543210", { requireCountryCode: true }],
    expected: "Country name is required when country code check is enabled.",
  },
  {
    question: "Invalid country name provided",
    input: ["+919876543210", { requireCountryCode: true, countryName: "Unknownland" }],
    expected: "Invalid country name.",
  },
  {
    question: "Missing expected country code",
    input: ["1234567890", { requireCountryCode: true, countryName: "India" }],
    expected: "Phone number must start with country code +91 for India.",
  },
  {
    question: "Valid Indian number with country code",
    input: ["+919876543210", { requireCountryCode: true, countryName: "India" }],
    expected: "Valid phone number.",
  },
  {
    question: "Valid US number with country code",
    input: ["+11234567890", { requireCountryCode: true, countryName: "USA" }],
    expected: "Valid phone number.",
  },
  {
    question: "Phone number is not a string",
    input: [1234567890 as any],
    expected: "Phone number must be a valid string.",
  },
  {
    question: "Empty phone number string",
    input: [""],
    expected: "Phone number must be a valid string.",
  },
];

testCheckLoop(testCases, "Phone", validatePhone);
