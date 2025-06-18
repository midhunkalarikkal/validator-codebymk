//// **** OTP **** \\\\

import { CommonReturn, RuleCheck, validateOtpInterface } from "../interface";
import { checkLoop } from "../utils/checkLoop";

export function validateOtp(
  otp: string,
  options?: validateOtpInterface
): CommonReturn {
  const {
    length = 4,
    alphabets = false,
  } = options || {};

  if (!otp || otp === "") {
    return {
      status: false,
      message: "Give an OTP.",
    };
  }

  if (typeof otp !== "string") {
    return {
      status: false,
      message: "OTP must be a string.",
    };
  }

  if (otp.length !== length) {
    return {
      status: false,
      message: `OTP must be ${length} characters long.`,
    };
  }

  const rules: RuleCheck[] = [
    {
      active: !alphabets,
      test: /[a-zA-Z]/,
      message: "Alphabets are not allowed in OTP.",
    },
    {
      active: true,
      test: /[^a-zA-Z0-9]/,
      message: "Special characters are not allowed in OTP.",
    },
  ];

    return checkLoop(rules, otp);
 
}
