import { CommonReturn, countryCodes, ValidatePhoneOptions } from "../interface";

export function validatePhone(phone: string, options?: ValidatePhoneOptions): CommonReturn {
  const {
    minLength = 10,
    maxLength = 10,
    requireCountryCode = false,
    countryName,
  } = options || {};

  if (!phone || typeof phone !== "string") {
    return {
      status: false,
      message: "Phone number must be a valid string.",
    };
  }

  let phoneNumber = phone;
  if (requireCountryCode) {
    if (!countryName) {
      return {
        status: false,
        message: "Country name is required when country code check is enabled.",
      };
    }

    const expectedCode = countryCodes[countryName];
    if (!expectedCode) {
      return {
        status: false,
        message: "Invalid country name.",
      };
    }

    if (!phone.startsWith(expectedCode)) {
      return {
        status: false,
        message: `Phone number must start with country code ${expectedCode} for ${countryName}.`,
      };
    }

    phoneNumber = phone.slice(expectedCode.length);
  }

  if (!/^\d+$/.test(phoneNumber)) {
    return {
      status: false,
      message: "Phone number should only contain digits.",
    };
  }

  if (phoneNumber.length < minLength) {
    return {
      status: false,
      message: `Phone number must be at least ${minLength} digits.`,
    };
  }

  if (phoneNumber.length > maxLength) {
    return {
      status: false,
      message: `Phone number must not exceed ${maxLength} digits.`,
    };
  }

  return {
    status: true,
    message: "Valid phone number.",
  };
}
