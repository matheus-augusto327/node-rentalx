import { ResetPasswordUserController } from "@modules/accounts/UseCases/resetPasswordUser/ResetPasswordUserController";
import { SendForgotPasswordEmailController } from "@modules/accounts/UseCases/sendForgotPasswordEmail/SendForgotPasswordEmailController";
import { Router } from "express";

const passwordRoutes = Router();

const sendForgotPasswordEmailController =
  new SendForgotPasswordEmailController();
const resetPasswordUserController = new ResetPasswordUserController();

passwordRoutes.post("/forgot", sendForgotPasswordEmailController.handle);
passwordRoutes.post("/forgot", resetPasswordUserController.handle);

export { passwordRoutes };
