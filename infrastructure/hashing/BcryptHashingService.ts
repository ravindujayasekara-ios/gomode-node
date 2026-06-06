import type { IHashingService } from "../../domain/hashing/IHashingService.js";
import bcrypt from "bcrypt";

export class HashingService implements IHashingService {
  async hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 12);
    return hashedPassword;
  }
}
