import type { User } from "../../domain/entity/user.js";
import type { UserRepository } from "../../domain/repository/UserRepository.js";
import { db } from "../database/postgres.js";
import { DatabaseErrorDefinitions } from "../database/errors/DatabaseErrorDefinitions.js";
import { DatabaseErrors } from "../database/errors/DatabaseErrors.js";

export class PostgresUserRepositoryImpl implements UserRepository {
  async getUserByEmail(email: string): Promise<User | null> {
    try {
      const result = await db.query(
        `
            SELECT *
            FROM users
            WHERE email = $1
            `,
        [email],
      );

      if (result.rowCount === 0) {
        return null;
      }

      return result.rows[0] as User;
    } catch {
      throw new DatabaseErrors(
        DatabaseErrorDefinitions.GET_USER_DB_ERROR.code,
        DatabaseErrorDefinitions.GET_USER_DB_ERROR.message,
      );
    }
  }

  async createUser(email: string, passwordHash: string): Promise<User> {
    try {
      const result = await db.query(
        `
        INSERT INTO users (email, password_hash)
        VALUES ($1, $2)
        RETURNING id, email, created_at, updated_at
        `,
        [email, passwordHash],
      );

      return result.rows[0] as User;
    } catch {
      throw new DatabaseErrors(
        DatabaseErrorDefinitions.CREATE_USER_DB_ERROR.code,
        DatabaseErrorDefinitions.CREATE_USER_DB_ERROR.message,
      );
    }
  }
}
