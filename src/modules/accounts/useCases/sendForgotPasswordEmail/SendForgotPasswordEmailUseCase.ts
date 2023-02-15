import { AppError } from "@errors/AppError";
import { v4 as uuidV4 } from "uuid";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokenRepository } from "@modules/accounts/repositories/IUsersTokenRepository";
import { inject, injectable } from "tsyringe";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

@injectable()
class SendForgotPasswordEmailUseCase {
  constructor(
    @inject("USersRepository")
    private usersRepository: IUsersRepository,
    @inject("UserTokensRepository")
    private usersTokenRepository: IUsersTokenRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute(email: string) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User does not exist!");
    }

    const token = uuidV4();

    const expires_date = this.dateProvider.addHours(3);

    await this.usersTokenRepository.create({
      refresh_token: token,
      user_id: user.id,
      expires_date,
    });
  }
}

export { SendForgotPasswordEmailUseCase };
