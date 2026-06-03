import type { RedisErrorCodes } from "./RedisErrorCode.js";

export class RedisError extends Error {
    constructor(type: string, message: string) {
        super(message)
    }
}