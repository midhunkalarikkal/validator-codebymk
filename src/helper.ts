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
    let result;

    if (Array.isArray(test.input)) {
      const [value, options] = test.input;
      result = validateFn(value, options);
      resultMessage = result.message;
      inputLabel = JSON.stringify(value);
    } else {
      result = validateFn(test.input);
      resultMessage = result.message;
      inputLabel = JSON.stringify(test.input);
    }

    
    const passed = resultMessage === test.expected;
    console.log(
      `Test ${i + 1}:`,
      passed ? "✅ Pass" : "❌ Fail",
      `\n  ➤ Input: ${inputLabel} \n  ➤ Expected: ${test.expected}\n  ➤ Got: ${resultMessage}\n`
    );
    console.log("result : ",result);
  }
}
