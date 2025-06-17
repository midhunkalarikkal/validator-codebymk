import { testCheckLoop } from "../../helper";
import { validateOtp } from "../../userValidator/user.otp.validator";

const testCases: {
    input: [string, Parameters<typeof validateOtp>[1]?];
    expected: string;
}[] = [
        {
            // ✅ Valid 4-digit OTP (default options)
            input: ["1234"],
            expected: "Valid.",
        },
        {
            // ✅ Valid 6-digit OTP (upper limit)
            input: ["123456"],
            expected: "Valid.",
        },
        {
            // ❌ Less than minLength (default 4)
            input: ["12"],
            expected: "OTP must be at least 4 characters long.",
        },
        {
            // ❌ More than maxLength (default 6)
            input: ["1234567"],
            expected: "OTP must not exceed 6 characters.",
        },
        {
            // ❌ OTP contains alphabet, but `alphabets` is false
            input: ["12ab"],
            expected: "Alphabets are not allowed in OTP.",
        },
        {
            // ✅ OTP with alphabet allowed
            input: ["ab12", { alphabets: true }],
            expected: "Valid.",
        },
        {
            // ❌ OTP contains special character
            input: ["12@4"],
            expected: "Special characters are not allowed in OTP.",
        },
        {
            // ❌ Empty string
            input: [""],
            expected: "Give an OTP.",
        },
        {
            // ❌ Not a string (e.g., number passed)
            input: [1234 as any],
            expected: "OTP must be a string.",
        },
        {
            // ✅ OTP with 5 characters and alphabets allowed
            input: ["1a2b3", { alphabets: true, minLength: 5 }],
            expected: "Valid.",
        },
        {
            // ✅ OTP with exact custom maxLength
            input: ["12345678", { maxLength: 8 }],
            expected: "Valid.",
        },
        {
            // ❌ Too short with custom minLength
            input: ["123", { minLength: 5 }],
            expected: "OTP must be at least 5 characters long.",
        },
        {
            // ❌ Too long with custom maxLength
            input: ["1234567", { maxLength: 6 }],
            expected: "OTP must not exceed 6 characters.",
        },
    ];

testCheckLoop(testCases, validateOtp);
