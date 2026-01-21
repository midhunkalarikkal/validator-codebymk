import { testCheckLoop } from "../../utils/testCheckLoop";
import { TestCase, ValidatePhoneOptions } from "../../utils/interface";
import { validatePhone } from "../../userValidator/user.phone.validator";

const testCases: TestCase<string, ValidatePhoneOptions>[] = [
  {
    description: "Phone is not a string (number given)",
    input: [1234567890 as any],
    expected: "Phone number must be a valid string.",
  },
  {
    description: "Phone is too short",
    input: ["12345", { minLength: 6, maxLength: 15 }],
    expected: "Phone number must be between 6 and 15 digits.",
  },
  {
    description: "Phone is too long",
    input: ["1".repeat(20), { minLength: 6, maxLength: 15 }],
    expected: "Phone number must be between 6 and 15 digits.",
  },
  {
    description: "Phone contains non-digit characters",
    input: ["1234abc567", { minLength: 6 }],
    expected: "Phone number should only contain digits.",
  },
  {
    description: "Country name is missing when required",
    input: ["+911234567890", { requireCountryCode: true }],
    expected: "Country name is required when country code check is enabled.",
  },
  {
    description: "Invalid country name",
    input: ["+911234567890", { requireCountryCode: true, countryName: "Mars" }],
    expected: "Invalid country name. Must be one country name Starting with capital letter.",
  },
  {
    description: "Phone does not start with country code",
    input: ["001234567890", { requireCountryCode: true, countryName: "India" }],
    expected: "Phone number must start with country code +91 for India.",
  },
  {
    description: "Phone is valid with country code (India)",
    input: ["+911234567890", { requireCountryCode: true, countryName: "India" }],
    expected: "Valid phone number.",
  },
  {
    description: "Phone is valid with countryName = any",
    input: ["9876543210", { requireCountryCode: false, countryName: "any", minLength: 10 }],
    expected: "Valid phone number.",
  },
  {
    description: "Phone is too short when using countryName: any",
    input: ["12345", { requireCountryCode: false, countryName: "any", minLength: 6 }],
    expected: "Phone number must be between 6 and 15 digits.",
  },
  {
    description: "Phone number too short after removing valid country code",
    input: ["+91123", {
      requireCountryCode: true,
      countryName: "India",
      minLength: 6
    }],
    expected: "Phone number must be between 6 and 15 digits.",
  },
  {
    description: "Phone number with valid country and within max range",
    input: ["+14165551234", {
      requireCountryCode: true,
      countryName: "United States",
      minLength: 10,
      maxLength: 15
    }],
    expected: "Valid phone number.",
  },
  {
    description: "Empty phone string",
    input: ["", { minLength: 10 }],
    expected: "Phone number must be a valid string.",
  }
];

testCheckLoop(testCases, "Phone", validatePhone);
