import { DatabaseErrorCodes } from "./DatabaseErrorCodes.js";

export const DatabaseErrorDefinitions = {
    DB_CONNECTION_ERROR: {
        code: DatabaseErrorCodes.DB_CONNECTION_ERROR,
        message: "Error in connecting to the database."
    },
    CREATE_USER_DB_ERROR: {
        code: DatabaseErrorCodes.CREATE_USER_DB_ERROR,
        message: "Creating user in the database error."
    },
    GET_USER_DB_ERROR: {
        code: DatabaseErrorCodes.GET_USER_DB_ERROR,
        message: "Get user from the database error."
    }
}