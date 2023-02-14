import { ICreateUserTokenDTO } from "@modules/accounts/repositories/dtos/ICreateUserTokenDTO";
import { IUsersTokenRepository } from "@modules/accounts/repositories/IUsersTokenRepository";
import { getRepository, Repository } from "typeorm";
import { UserTokens } from "../entities/UsetTokens";

class UsersTokenRepository implements IUsersTokenRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = getRepository(UserTokens);
  }

  async create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      expires_date,
      refresh_token,
      user_id,
    });

    await this.repository.save(userToken);

    return userToken;
  }
}

export { UsersTokenRepository };
