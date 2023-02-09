import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password, driver_licence } = request.body;

        const createUsersUseCase = container.resolve(CreateUserUseCase);

        createUsersUseCase.execute({
            name,
            email,
            password,
            driver_licence,
            // avatar,
        });

        return response.status(201).send();
    }
}

export { CreateUserController };
