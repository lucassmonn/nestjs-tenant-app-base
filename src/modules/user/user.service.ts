import { Injectable } from "@nestjs/common"
import { BaseService } from "src/base/service.base"
import { CreateUserDto } from "./dto/create-user.dto"
import { User } from "./entities/user.entity"
import { EmailIsAlreadyInUse } from "./user.exception"
import { UserRepository } from "./user.repository"

@Injectable()
export class UserService extends BaseService<User, CreateUserDto> {
  constructor(private usersRepository: UserRepository) {
    super(usersRepository)
  }

  async create(data: User): Promise<User> {
    if (await this.exists({ email: data.email }))
      throw EmailIsAlreadyInUse(data.email)
    return await super.create(data)
  }
}
