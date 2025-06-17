import { RuleCheck } from "./interface";

export function checkLoop<T extends string>(rules: RuleCheck[], value: T) {
  for (const rule of rules) {
    if (rule.active && rule.test.test(value)) {
      return {
        status: false,
        message: rule.message,
      };
    }
  }

  return {
    status: true,
    message: "Valid.",
  };
}


type GenericTestCase<T = any> = {
  input: T extends [infer U, infer V] ? [U, V?] : T;
  expected: string;
};

export function testCheckLoop<T>(
  testCases: GenericTestCase<T>[],
  validateFn: (...args: any[]) => { message: string }
): void {
  for (const [i, test] of testCases.entries()) {
    let inputLabel: string;
    let resultMessage: string;

    if (Array.isArray(test.input)) {
      const [value, options] = test.input;
      const result = validateFn(value, options);
      resultMessage = result.message;

      inputLabel = JSON.stringify(value);
    } else {
      const result = validateFn(test.input);
      resultMessage = result.message;
      inputLabel = JSON.stringify(test.input);
    }

    const passed = resultMessage === test.expected;
    console.log(
      `Test ${i + 1}:`,
      passed ? "✅ Pass" : "❌ Fail",
      `\n  ➤ Input: ${inputLabel} \n  ➤ Expected: ${test.expected}\n  ➤ Got: ${resultMessage}\n`
    );
  }
}
