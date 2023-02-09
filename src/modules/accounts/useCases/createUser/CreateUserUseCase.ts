import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserSRepo") private userRepository: IUsersRepository
    ) {}

    async execute({
        name,
        email,
        password,
        driver_licence,
    }: // avatar,
    ICreateUserDTO): Promise<void> {
        // userAlreadyExists
        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError("User already exist!");
        }
        // passwordHash
        const passwordHash = await hash(password, 8);

        await this.userRepository.create({
            name,
            password: passwordHash,
            email,
            driver_licence,
        });
    }
}

export { CreateUserUseCase };
