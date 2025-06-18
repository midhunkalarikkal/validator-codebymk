import { testCheckLoop } from "../../helper";
import { validateEmail } from "../../userValidator/user.email.validator";

const testCases: { input: string; expected: string }[] = [
    { 
        // ✅Valid email with standard format
        input: "midhun@email.com", 
        expected: "Valid email." 
    },
    { 
        // ✅ Valid email with subdomain and plus symbol
        input: "user.name+tag+sorting@example.co.in", 
        expected: "Valid email." 
    },
    { 
        // ❌ Invalid: missing '@' and domain
        input: "plainaddress", 
        expected: "Invalid email format." 
    },
    { 
        // ❌ Invalid: TLD missing
        input: "email@.com", 
        expected: "Invalid email format." 
    },
    { 
        // ❌ Invalid: TLD too short
        input: "email@domain", 
        expected: "Invalid email format." 
    },
];

testCheckLoop(testCases,"Email", validateEmail);
