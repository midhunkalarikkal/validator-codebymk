//// **** PASSWORD **** \\\\

import { CommonReturn, validatePasswordInterface } from "../utils/interface";

export function validatePassword(
  password: string,
  options?: validatePasswordInterface
): CommonReturn {
  const {
    minLength = 6,
    maxLength = 32,
    minLowercase = 1,
    minUppercase = 1,
    minDigits = 1,
    minSpecialCharacter = 1,
    returnPoint = false,
    pointsForLowercase = 25,
    pointsForUppercase = 25,
    pointsForDigits = 25,
    pointsForSpecialCharacter = 25,
  } = options || {};

  if (!password || typeof password !== "string") {
    return {
      status: false,
      message: "Password must be a valid string.",
    };
  }

  if (password.length < minLength) {
    return {
      status: false,
      message: `Password must be at least ${minLength} characters long.`,
    };
  }

  if (password.length > maxLength) {
    return {
      status: false,
      message: `Password must not exceed ${maxLength} characters.`,
    };
  }

  const lowercaseCount = (password.match(/[a-z]/g) || []).length;
  const uppercaseCount = (password.match(/[A-Z]/g) || []).length;
  const digitCount = (password.match(/\d/g) || []).length;
  const specialCount = (password.match(/[^a-zA-Z0-9]/g) || []).length;

  if (lowercaseCount < minLowercase) {
    return {
      status: false,
      message: `Password must contain at least ${minLowercase} lowercase letter(s).`,
    };
  }

  if (uppercaseCount < minUppercase) {
    return {
      status: false,
      message: `Password must contain at least ${minUppercase} uppercase letter(s).`,
    };
  }

  if (digitCount < minDigits) {
    return {
      status: false,
      message: `Password must contain at least ${minDigits} digit(s).`,
    };
  }

  if (specialCount < minSpecialCharacter) {
    return {
      status: false,
      message: `Password must contain at least ${minSpecialCharacter} special character(s).`,
    };
  }

  const score =
    (lowercaseCount > 0 ? pointsForLowercase : 0) +
    (uppercaseCount > 0 ? pointsForUppercase : 0) +
    (digitCount > 0 ? pointsForDigits : 0) +
    (specialCount > 0 ? pointsForSpecialCharacter : 0);

  return {
    status: true,
    message: "Valid.",
    ...(returnPoint ? { point: score } : {}),
  };
}
