import { TestCase } from "../../utils/interface";
import { testCheckLoop } from "../../utils/testCheckLoop";
import { sampleValidator } from "../../methods/sample.validator";

// ✅ Test Structure Guidelines for Contributors:
/**
 * 1. Add **maximum number of test cases** to cover all scenarios.
 * 2. Include **all possible edge cases** (empty input, invalid types, etc.).
 * 3. Use meaningful `description` descriptions to explain the purpose of each test.
 * 4. Match the `expected` output exactly as returned from the validator.
 * 5. Use correct types for the input and options as defined in the interface.
 */

const testCases: TestCase<string>[] = [
  { 
    description: "Valid value with default options", // Describe what is being tested
    input: "test@example.com",                    // The input value to validate
    expected: "Valid."                            // Expected message from validator
  },
  
  // ⛔ Add more test cases here:
  // - Edge cases (empty, null, invalid format, special chars)
  // - Positive/negative scenarios
  // - Cases that test each option/prop individually and in combination
];

testCheckLoop(testCases, "Value", sampleValidator);
