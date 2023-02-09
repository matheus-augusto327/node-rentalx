import { Router } from "express";

import { AuthenticateUserController } from "../../../../modules/accounts/usecases/authenticateUser/AuthenticateUserController";

const userAuth = Router();

const authenticateUserController = new AuthenticateUserController();

userAuth.post("/sessions", authenticateUserController.handle);

export { userAuth };
