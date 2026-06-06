export interface User {
    id: number;
    email: string;
    passwordHash: string|null;
    createdAt: Date;
    updatedAt: Date;
}