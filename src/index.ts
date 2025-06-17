//// **** User register or login values validators **** \\

import { CommonReturn, RuleCheck, validateUserNameInterface } from "./interface";

// 1. USERNAME
export function validateUserName(
    username: string,
    options: validateUserNameInterface = {}
): CommonReturn {

    const {
        minimumLength = 4,
        maximumLength = 30,
        uppercase = false,
        digits = true,
        specialCharacters = true,
    } = options;

    if (username.length < minimumLength) {
        return {
            status: false,
            message: `Username must be at least ${minimumLength} characters long.`
        };
    }

    if (username.length > maximumLength) {
        return {
            status: false,
            message: `Username must not exceed ${maximumLength} characters.`
        };
    }

    const rules: RuleCheck[] = [
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

    for (const rule of rules) {
        if (rule.active && rule.test.test(username)) {
            return {
                status: false,
                message: rule.message,
            };
        }
    }

    return {
        status: true,
        message: "Valid username."
    };
}