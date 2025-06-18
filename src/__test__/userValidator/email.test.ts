import { TestCase } from "../../utils/interface";
import { testCheckLoop } from "../../utils/testCheckLoop";
import { validateEmail } from "../../userValidator/user.email.validator";

const testCases: TestCase<string>[] = [
  { 
    description: "Valid email with standard format",
    input: "midhun@email.com", 
    expected: "Valid email." 
  },
  { 
    description: "Valid email with subdomain and plus symbol",
    input: "user.name+tag+sorting@example.co.in", 
    expected: "Valid email." 
  },
  { 
    description: "Invalid: missing '@' and domain",
    input: "plainaddress", 
    expected: "Invalid email format." 
  },
  { 
    description: "Invalid: TLD missing",
    input: "email@.com", 
    expected: "Invalid email format." 
  },
  { 
    description: "Invalid: TLD too short",
    input: "email@domain", 
    expected: "Invalid email format." 
  },
  { 
    description: "Invalid: complete junk input",
    input: "❌❌❌", 
    expected: "Invalid email format." 
  },
];

testCheckLoop(testCases, "Email", validateEmail);
