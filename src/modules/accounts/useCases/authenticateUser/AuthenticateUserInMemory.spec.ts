import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersReporitoyInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(
            usersRepositoryInMemory
        );
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });

    it("Shoul be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            driver_licence: "000123",
            email: "user@test.com",
            name: "User Test",
            password: "12345",
        };

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });

        expect(result).toHaveProperty("token");
    });

    it("Should not be able to authenticate a non existing user", () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "false@email.com",
                password: "12345",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should not be able to authenticate with a incorrect password", () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                driver_licence: "00192",
                email: "user@test.com",
                name: "User Test Error",
                password: "1234",
            };

            await createUserUseCase.execute(user);
            await authenticateUserUseCase.execute({
                email: user.email,
                password: "incorrectpassword",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
