//// **** PASSWORD **** \\\\

import { ValidatePasswordInterface, ValidatePasswordReturn } from "../utils/interface";

export function validatePassword(
  password: string,
  options?: ValidatePasswordInterface
): ValidatePasswordReturn {
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

  const errors: string[] = [];

  if (!password || typeof password !== "string") {
    return {
      status: false,
      message: "Password must be a valid string.",
      ...(returnPoint ? { point: 0 } : {}),
    };
  }

  if (password.length < minLength) {
    errors.push(`Password must be at least ${minLength} characters long.`);
  }

  if (password.length > maxLength) {
    errors.push(`Password must not exceed ${maxLength} characters.`);
  }

  const lowercaseCount = (password.match(/[a-z]/g) || []).length;
  const uppercaseCount = (password.match(/[A-Z]/g) || []).length;
  const digitCount = (password.match(/\d/g) || []).length;
  const specialCount = (password.match(/[^a-zA-Z0-9]/g) || []).length;

  let score = 0;

  if (lowercaseCount >= minLowercase) score += pointsForLowercase;
  else errors.push(`Password must contain at least ${minLowercase} lowercase letter(s).`);

  if (uppercaseCount >= minUppercase) score += pointsForUppercase;
  else errors.push(`Password must contain at least ${minUppercase} uppercase letter(s).`);

  if (digitCount >= minDigits) score += pointsForDigits;
  else errors.push(`Password must contain at least ${minDigits} digit(s).`);

  if (specialCount >= minSpecialCharacter) score += pointsForSpecialCharacter;
  else errors.push(`Password must contain at least ${minSpecialCharacter} special character(s).`);

  if (errors.length > 0) {
    return {
      status: false,
      message: errors[0],
      ...(returnPoint ? { point: score } : {}),
    };
  }

  return {
    status: true,
    message: "Valid.",
    ...(returnPoint ? { point: score } : {}),
  };
}