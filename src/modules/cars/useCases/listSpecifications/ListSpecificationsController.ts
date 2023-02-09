import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
    // constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const listSpecificationsUseCase = container.resolve(
            ListSpecificationsUseCase
        );
        const all = await listSpecificationsUseCase.execute();

        return response.json(all);
    }
}

export { ListSpecificationsController };
