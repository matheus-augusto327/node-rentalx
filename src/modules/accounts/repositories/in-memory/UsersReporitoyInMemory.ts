import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
    users: User[] = [];

    async create({
        name,
        password,
        email,
        driver_licence,
    }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            name,
            password,
            email,
            driver_licence,
        });

        this.users.push(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.users.find((user) => user.email === email);
    }

    async findByID(id: string): Promise<User> {
        const user = this.users.find((user) => user.id === id);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return user!;
    }
}

export { UsersRepositoryInMemory };
