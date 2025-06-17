# Validator-codebymk

A lightweight and customizable validation utility for validating user inputs such as username, fullname, email, OTP, and phone number.

---
### Validator Options Reference

| **Function**       | **Option**           | **Type**  | **Default** | **Description**                                            |
| ------------------ | -------------------- | --------- | ----------- | ---------------------------------------------------------- |
| `validateUsername` | `minLength`          | `number`  | `4`         | Minimum allowed characters                                 |
|                    | `maxLength`          | `number`  | `30`        | Maximum allowed characters                                 |
|                    | `uppercase`          | `boolean` | `false`     | Whether uppercase letters are allowed                      |
|                    | `digits`             | `boolean` | `true`      | Whether digits are allowed                                 |
|                    | `specialCharacters`  | `boolean` | `true`      | Allow special characters `.`, `_`, and `-`                 |
| `validateFullname` | `minLength`          | `number`  | `6`         | Minimum character length                                   |
|                    | `maxLength`          | `number`  | `30`        | Maximum character length                                   |
|                    | `uppercase`          | `boolean` | `true`      | Whether uppercase letters are allowed                      |
|                    | `allowSpace`         | `boolean` | `true`      | Whether spaces are allowed                                 |
| `validateOtp`      | `minLength`          | `number`  | `4`         | Minimum OTP length                                         |
|                    | `maxLength`          | `number`  | `6`         | Maximum OTP length                                         |
|                    | `alphabets`          | `boolean` | `false`     | Allow alphabets in OTP                                     |
| `validatePhone`    | `minLength`          | `number`  | `10`        | Minimum digits in phone number                             |
|                    | `maxLength`          | `number`  | `10`        | Maximum digits in phone number                             |
|                    | `requireCountryCode` | `boolean` | `false`     | Require phone number to begin with a country code          |
|                    | `countryName`        | `string?` | `undefined` | Country name for validating the country code (if required) |
| `validateEmail`    | *No options*         | –         | –           | Validates format using standard regex                      |
