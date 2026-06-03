import type { User } from "../../domain/entity/user.js";
import type { UserRepository } from "../../domain/repository/user-repository.js";
import { db } from "../database/postgres.js";

export class PostgresUserRepository implements UserRepository {
  async getUserByEmail(email: string): Promise<User | null> {
    const result = await db.query(
      `
            SELECT *
            FROM users
            WHERE email = $1
            `,
      [email],
    );

    if (result.rows.length === 0) {
      return null;
    }

    return result.rows[0] as User;
  }

  async createUser(email: string, passwordHash: string): Promise<User> {
    const result = await db.query(
        `
            INSERT INTO users (email, password_hash)
            VALUES ($1, $2)
        `,
        [email, passwordHash],
    )
    
    return result.rows[0] as User;
  }
}
