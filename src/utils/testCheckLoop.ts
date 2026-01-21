import { TestCase } from "./interface";

export function testCheckLoop<Value, Options = undefined>(
  testCases: TestCase<Value, Options>[],
  title: string,
  validateFn: (...args: any[]) => { status: boolean, message: string, point?: number }
): void {
  console.log(`\n🔍🔍🔍  <<<<<< 🔹 ${title.toUpperCase()} TESTS START 🔹 >>>>>>  🔍🔍🔍\n`);
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

    
    const passedMessage = resultMessage === test.expected;
    const shouldCheckPoint = title.toLowerCase() === "password" && result.point !== undefined;
    const expectedPoint = Array.isArray(test.input) ? test.input[1]?.expectedPoint : undefined;
    const passedPoint = expectedPoint !== undefined ? result.point === expectedPoint : true;

    const passed = passedMessage && passedPoint;

    console.log(
      `🧪 Test ${i + 1}:` +
      `\n   ❓ Description   : ${test.description}` +
      `\n   📥 Input         : ${inputLabel}` +
      `\n   🎯 Expected Msg  : "${test.expected}"` +
      `${shouldCheckPoint ? `\n   🧮 Expected Point: ${expectedPoint}` : ""}` +
      `\n   🧾 Got Msg       : "${resultMessage}"` +
      `${shouldCheckPoint ? `\n   📌 Got Point     : ${result.point}` : ""}` +
      `\n   📊 Result        : { status: ${result.status}, message: "${result.message}"${result.point !== undefined ? `, point: ${result.point}` : ""} }` +
      `\n   ✅ Status        : ${passed ? "✅ PASS" : "❌ FAIL"}\n`
    );
  }

  console.log(`\n🏁🏁🏁  <<<<<< ✅ ${title.toUpperCase()} TESTS END ✅ >>>>>>  🏁🏁🏁\n`);
}
