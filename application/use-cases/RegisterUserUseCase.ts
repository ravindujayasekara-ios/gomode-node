import { DatabaseError } from "pg";
import type { IHashingService } from "../../domain/hashing/IHashingService.js";
import type { UserRepository } from "../../domain/repository/UserRepository.js";
import { UserError } from "../../shared/errors/UserErrors/UserError.js";
import { UserErrorDefinitions } from "../../shared/errors/UserErrors/UserErrorDefinitions.js";
import type { RegisterUserDTO } from "../dtos/RegisterUserDTO.js";
import type { User } from "../../domain/entity/user.js";

export class RegisterUseCase {
  constructor(
    private readonly userRepostory: UserRepository,
    private readonly hashingService: IHashingService,
  ) {}

  async execute(registerUserDTO: RegisterUserDTO): Promise<User> {
    try {
      const userExisit = await this.userRepostory.getUserByEmail(
        registerUserDTO.email,
      );

      if (userExisit) {
        throw new UserError(
          UserErrorDefinitions.USER_EXISTS.code,
          UserErrorDefinitions.USER_EXISTS.message,
        );
      }

      const hashPassword = await this.hashingService.hashPassword(
        registerUserDTO.password,
      );

      const createdUser = this.userRepostory.createUser(
        registerUserDTO.email,
        hashPassword,
      );

      return createdUser;
    } catch (error) {
      throw error;
    }
  }
}
