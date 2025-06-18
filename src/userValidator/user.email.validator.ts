//// **** EMAIL **** \\\\

import { CommonReturn } from "../utils/interface";

export function validateEmail(email: string): CommonReturn {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email || email === "") {
    return {
      status: false,
      message: "Give an email.",
    };
  }

  if (typeof email !== "string") {
    return {
      status: false,
      message: "Email must be a string.",
    };
  }

  if (!emailRegex.test(email)) {
    return {
      status: false,
      message: "Invalid email format.",
    };
  }

  return {
    status: true,
    message: "Valid email.",
  };
}
