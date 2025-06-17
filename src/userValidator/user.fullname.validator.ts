//// **** Fullname **** \\\\
    
import { CommonReturn, RuleCheck, validateFullnameInterface } from "../interface";

export function validateFullname(
    fullname: string,
    options?: validateFullnameInterface
): CommonReturn {

    const {
        minLength = 6,
        maxLength = 30,
        uppercase = true,
        allowSpace = true,
    } = options || {};

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

    for (const rule of rules) {
        if (rule.active && rule.test.test(fullname)) {
            return {
                status: false,
                message: rule.message,
            };
        }
    }

    return {
        status: true,
        message: "Valid fullname."
    };
}
