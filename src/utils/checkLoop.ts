import { RuleCheck } from "../interface";

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