## 🧑‍💻 How to Contribute

1. 🍴 Fork the repository:
   https://github.com/midhunkalarikkal/validator-codebymk

2. 📂 Clone your fork:
   git clone https://github.com/your-username/validator-codebymk

3. 🔧 Create a new branch with your name or feature:
   git checkout -b yourname/feature-name

4. 🧠 Add your validator function inside:
   src/methods/

   👉 Example: `src/methods/validateAddress.ts`

5. 🧪 Create test cases for your validator inside:
   src/**test**/testMethods/

   👉 Example: `src/__test__/methods/address.test.ts`

   📁 Test Case Format Example

```bash
const testCases: TestCase<string, YourValidatorOptionType>[] = [
  {
    question: "Too short input",
    input: ["ab", { minLength: 4 }],
    expected: "Input must be at least 4 characters long.",
  },
  ...
];
```

6. 🔗 If needed, add any constants inside:
   src/utils/constants.ts

7. ✅ Run relevant tests to make sure everything works:
   npm run test:<your-validator-name>

8. ⬆️ Push your changes:
   git push origin yourname/feature-name

9. 📬 Create a pull request to the main repo:
   Describe what you’ve added and why in the PR description.
