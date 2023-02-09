import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        name,
        password,
        email,
        driver_licence,
        avatar,
        id,
    }: ICreateUserDTO): Promise<void> {
        const userData = this.repository.create({
            name,
            password,
            email,
            driver_licence,
            isAdmin: false,
            avatar,
            id,
        });

        await this.repository.save(userData);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const userEmailRecovery = await this.repository.findOne({ email });
        return userEmailRecovery;
    }

    async findByID(id: string): Promise<User> {
        const userIDRecovery = await this.repository.findOneOrFail(id);
        return userIDRecovery;
    }
}

export { UsersRepository };
