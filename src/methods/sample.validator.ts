import { CommonReturn } from "../utils/interface";

export function sampleValidator(value: any, options: any): CommonReturn {
    const { 
        // Define your props here with sensible default values using destructuring
        // Example: minLength = 5, allowSpecial = false
    } = options || {};

    /**
     * ✅ Validation Guidelines for Contributors:
     * 
     * 1. Add **maximum validation cases**, including **edge cases**.
     * 2. Return meaningful messages using **template literals**.
     * 3. Use **default values** for props inside the destructured options object.
     * 4. Maintain proper `if`/`else` blocks for clean readable logic.
     * 5. For any types/interfaces, **use or extend** those from `utils/interface.ts`.
     * 6. Store constant values in `utils/constants.ts` if reused or project-wide.
     * 7. Always return an object of type `CommonReturn` → `{ status: boolean, message: string }`.
     */

    // 🔍 Sample validation logic below (replace with real ones)
    if (!value || typeof value !== "string") {
        return {
            status: false,
            message: "Value must be a non-empty string.",
        };
    }

    // Add your custom validation logic here...

    return {
        status: true,
        message: "Valid.", // 🟢 Return success message on pass
    };
}
