//// **** USERNAME **** \\\\

import { checkLoop } from "../utils/checkLoop";
import { CommonReturn, RuleCheck, ValidateUsernameameInterface, } from "../utils/interface";

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
        allowSpace = false,
    } = options || {};

    const allowedChars = allowSpace ? /[^a-zA-Z0-9.\-_\s]/ : /[^a-zA-Z0-9.\-_]/;

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
            active: !allowSpace,
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
            active: true,
            test: new RegExp(
                specialCharacters
                    ? allowSpace
                        ? `[^a-zA-Z0-9.\\-_\\s]`
                        : `[^a-zA-Z0-9.\\-_]`
                    : allowSpace
                        ? `[^a-zA-Z0-9\\s]`
                        : `[^a-zA-Z0-9]`
            ),
            message:
                specialCharacters
                    ? "Only '.', '-', and '_' are allowed as special characters." +
                    (allowSpace ? " Space is allowed." : "")
                    : allowSpace
                        ? "Only letters, digits, and space are allowed."
                        : "Only letters and digits are allowed.",
        }
    ];

    return checkLoop(rules, username);
}