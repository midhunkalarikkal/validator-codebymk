//// **** FULLNAME **** \\\\

import { checkLoop } from "../utils/checkLoop";
import { CommonReturn, RuleCheck, ValidateFullnameInterface } from "../utils/interface";

export function validateFullname(
    fullname: string,
    options?: ValidateFullnameInterface
): CommonReturn {

    const {
        minLength = 6,
        maxLength = 30,
        uppercase = true,
        allowSpace = true,
    } = options || {};

    if (!fullname || fullname === "") {
        return {
            status: false,
            message: "Give a fullname.",
        };
    }

    if (typeof fullname !== "string") {
        return {
            status: false,
            message: "Fullname must be a string.",
        };
    }

    if (fullname.length < minLength) {
        return {
            status: false,
            message: `Fullname must be at least ${minLength} characters long.`
        };
    }

    if (fullname.length > maxLength) {
        return {
            status: false,
            message: `Fullname must not exceed ${maxLength} characters.`
        };
    }

    const rules: RuleCheck[] = [
        {
            active: !uppercase,
            test: /[A-Z]/,
            message: "Uppercase letters are not allowed in fullname.",
        },
        {
            active: true,
            test: /\d/,
            message: "Digits are not allowed in fullname.",
        },
        {
            active: true,
            test: /[^a-zA-Z ]/,
            message: "Special characters are not allowed in fullname.",
        },
        {
            active: !allowSpace,
            test: / /,
            message: "Spaces are not allowed in fullname.",
        },
    ];

    return checkLoop(rules, fullname);

}
