import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
    create({
        name,
        password,
        email,
        driver_licence,
    }: // avatar,
    ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User | undefined>;
    findByID(id: string): Promise<User>;
}

export { IUsersRepository };
