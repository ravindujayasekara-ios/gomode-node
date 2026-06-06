import type { UserErrorCodes } from "./UserErrorCodes.js";

export class UserError extends Error {
    constructor(code: string, message: string) {
        super(message)
    }
}