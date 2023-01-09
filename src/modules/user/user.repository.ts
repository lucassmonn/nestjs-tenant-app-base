import { InjectTenancyModel } from "@needle-innovision/nestjs-tenancy"
import { Injectable } from "@nestjs/common"
import { Model } from "mongoose"
import { BaseRepository } from "src/base/repository.base"
import { CreateUserDto } from "./dto/create-user.dto"
import { User } from "./entities/user.entity"

@Injectable()
export class UserRepository extends BaseRepository<User, CreateUserDto> {
  constructor(
    @InjectTenancyModel(User.name) private readonly userModel: Model<User>
  ) {
    super(userModel)
  }
}
