import { Request, Response } from "express";
import { container } from "tsyringe";

import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driver_license } = request.body;

    const refreshTokenUseCase = container.resolve(RefreshTokenUseCase);

    return response.status(201).send();
  }
}

export { RefreshTokenController };
