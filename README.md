# Validator-codebymk

A lightweight and customizable validation utility for validating user inputs such as username, fullname, email, OTP, and phone number.

---

## 📦 Installation
```bash
npm install validator-codebymk
```

## 🤝 Want To Contribute?

We welcome community contributions!

Please read our [CONTRIBUTING.md](https://github.com/midhunkalarikkal/validator-codebymk/blob/main/CONTRIBUTING.md) for guidelines on how to get started.

Feel free to fork the repo, create a branch, and submit a pull request 🚀


### 🧪 Validator Options Reference

| **Function**         | **Option**                 | **Type**  | **Default** | **Description**                                              |
| -------------------- | ------------------------   | --------- | ----------- | ------------------------------------------------------------ |
| `validateUsername`   | `minLength`                | `number`  | `4`         | Minimum allowed characters                                   |
|                      | `maxLength`                | `number`  | `30`        | Maximum allowed characters                                   |
|                      | `uppercase`                | `boolean` | `false`     | Whether uppercase letters are allowed                        |
|                      | `digits`                   | `boolean` | `true`      | Whether digits are allowed                                   |
|                      | `specialCharacters`        | `boolean` | `true`      | Allow special characters `.`, `_`, and `-`                   |
| `validateFullname`   | `minLength`                | `number`  | `6`         | Minimum character length                                     |
|                      | `maxLength`                | `number`  | `30`        | Maximum character length                                     |
|                      | `uppercase`                | `boolean` | `true`      | Whether uppercase letters are allowed                        |
|                      | `allowSpace`               | `boolean` | `true`      | Whether spaces are allowed                                   |
| `validateOtp`        | `length`                   | `number`  | `4`         | OTP length                                                   |
|                      | `alphabets`                | `boolean` | `false`     | Allow alphabets in OTP                                       |
| `validatePhone`      | `length`                   | `number`  | `10`        | Digits in phone number                                       |
|                      | `requireCountryCode`       | `boolean` | `false`     | Require phone number to begin with a country code            |
|                      | `countryName`              | `string?` | `undefined` | Country name for validating the country code (if required)   |
| `validateEmail`      | *No options*               | –         | –           | Validates format using standard regex                        |
| `validatePassword`   | `minLength`                | `number`  | `6`         | Minimum number of characters in the password                 |
|                      | `maxLength`                | `number`  | `32`        | Maximum allowed characters in the password                   |
|                      | `minLowercase`             | `number`  | `1`         | Minimum number of lowercase letters required                 |
|                      | `minUppercase`             | `number`  | `1`         | Minimum number of uppercase letters required                 |
|                      | `minDigits`                | `number`  | `1`         | Minimum number of digits required                            |
|                      | `minSpecialCharacter`      | `number`  | `1`         | Minimum number of special characters required                |
|                      | `returnPoint`              | `boolean` | `false`     | Return score based on password complexity                    |
|                      | `pointsForLowercase`       | `number`  | `25`        | Score weight for lowercase characters                        |
|                      | `pointsForUppercase`       | `number`  | `25`        | Score weight for uppercase characters                        |
|                      | `pointsForDigits`          | `number`  | `25`        | Score weight fordigits                                       |
|                      | `pointsForSpecialCharacter`| `number`  | `25`        | Score weight for special characters                          |


## 📜 License: MIT

MIT License
Copyright (c) 2025 Midhun
Permission is hereby granted, free of charge, to any person obtaining a copy of this software...

## 👨‍💻 Open Contributors

<img src="https://contrib.rocks/image?repo=midhunkalarikkal/validator-codebymk" width="30" />
