//// **** OTP **** \\\\

import { checkLoop } from "../helper";
import { CommonReturn, RuleCheck, validateOtpInterface } from "../interface";

export function validateOtp(
  otp: string,
  options?: validateOtpInterface
): CommonReturn {
  const {
    minLength = 4,
    maxLength = 6,
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

  if (otp.length < minLength) {
    return {
      status: false,
      message: `OTP must be at least ${minLength} characters long.`,
    };
  }

  if (otp.length > maxLength) {
    return {
      status: false,
      message: `OTP must not exceed ${maxLength} characters.`,
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
