import type { User } from '../entity/user.js';

export interface UserRepository {
    createUser(email: string, passwordHash: string): Promise<User>;
    getUserByEmail(email: string): Promise<User | null>;
}