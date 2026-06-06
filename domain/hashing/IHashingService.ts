export interface IHashingService {
    hashPassword(password: string): Promise<string>
}