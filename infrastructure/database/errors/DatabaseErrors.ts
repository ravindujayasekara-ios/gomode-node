export class DatabaseErrors extends Error {
    constructor(code: string, message: string) {
        super(message)
    }
}