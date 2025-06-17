import { testCheckLoop } from "../../helper";
import { validatePhone } from "../../userValidator/user.phone.validator";

const testCases: {
    input: [string, Parameters<typeof validatePhone>[1]?];
    expected: string;
}[] = [
        {
            // ✅ Valid 10-digit phone number (default config)
            input: ["9876543210"],
            expected: "Valid phone number.",
        },
        {
            // ❌ Not enough digits
            input: ["98765"],
            expected: "Phone number must be at least 10 digits.",
        },
        {
            // ❌ Too many digits
            input: ["9876543210123"],
            expected: "Phone number must not exceed 10 digits.",
        },
        {
            // ❌ Contains alphabets
            input: ["98765abcde"],
            expected: "Phone number should only contain digits.",
        },
        {
            // ✅ Valid phone with country code (+91) and correct countryName = India
            input: ["+919876543210", { requireCountryCode: true, countryName: "India" }],
            expected: "Valid phone number.",
        },
        {
            // ❌ Missing country code, but requireCountryCode is true
            input: ["9876543210", { requireCountryCode: true, countryName: "India" }],
            expected: "Phone number must start with country code +91 for India.",
        },
        {
            // ❌ Country name not passed when required
            input: ["+919876543210", { requireCountryCode: true }],
            expected: "Country name is required when country code check is enabled.",
        },
        {
            // ❌ Wrong country code for country name
            input: ["+19876543210", { requireCountryCode: true, countryName: "India" }],
            expected: "Phone number must start with country code +91 for India.",
        },
        {
            // ❌ Invalid characters (symbol)
            input: ["98@6543210"],
            expected: "Phone number should only contain digits.",
        },
        {
            // ✅ Valid US phone number with country code
            input: ["+11234567890", { requireCountryCode: true, countryName: "United States" }],
            expected: "Valid phone number.",
        },
        {
            // ❌ Invalid type (number instead of string)
            input: [1234567890 as any],
            expected: "Phone number must be a valid string.",
        },
        {
            // ❌ Empty string
            input: [""],
            expected: "Phone number must be a valid string.",
        },
    ];

testCheckLoop(testCases, validatePhone);
