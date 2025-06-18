//// **** USERNAME **** \\\\

import { checkLoop } from "../utils/checkLoop";
import { CommonReturn, RuleCheck, ValidateUsernameameInterface,  } from "../utils/interface";

export function validateUsername(
    username: string,
    options?: ValidateUsernameameInterface
): CommonReturn {

    const {
        minLength = 4,
        maxLength = 30,
        uppercase = false,
        digits = true,
        specialCharacters = true,
    } = options || {};

    if (!username || username === "") {
        return {
            status: false,
            message: "Give a username.",
        };
    }

    if (typeof username !== "string") {
        return {
            status: false,
            message: "Username must be a string.",
        };
    }

    if (username.length < minLength) {
        return {
            status: false,
            message: `Username must be at least ${minLength} characters long.`,
        };
    }

    if (username.length > maxLength) {
        return {
            status: false,
            message: `Username must not exceed ${maxLength} characters.`,
        };
    }

    const rules: RuleCheck[] = [
        {
            active: true,
            test: /\s/,
            message: "Spaces are not allowed in username.",
        },
        {
            active: !uppercase,
            test: /[A-Z]/,
            message: "Uppercase letters are not allowed in username.",
        },
        {
            active: !digits,
            test: /\d/,
            message: "Digits are not allowed in username.",
        },
        {
            active: !specialCharacters,
            test: /[^a-zA-Z0-9]/,
            message: "Special characters are not allowed in username.",
        },
        {
            active: specialCharacters,
            test: /[^a-zA-Z0-9.\-_]/,
            message: "Only '.', '-', and '_' are allowed as special characters.",
        },
    ];

    return checkLoop(rules, username);
}