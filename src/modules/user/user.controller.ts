import {
  Body,
  Controller,
  Patch,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { BaseController } from "src/base/controller.base"
import { RequestWithUser } from "src/base/interfaces.base"
import { CreateUserDto } from "./dto/create-user.dto"
import { User } from "./entities/user.entity"
import { UserService } from "./user.service"

@Controller("user")
export class UserController extends BaseController<User, CreateUserDto> {
  constructor(private readonly usersService: UserService) {
    super(usersService)
  }

  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    return await super.create(user)
  }

  @UseGuards(AuthGuard("jwt"))
  @Patch()
  async updateMySelf(
    @Request() { user: { id } }: RequestWithUser,
    @Body() userData: Partial<User>
  ): Promise<User> {
    return await super.update(id, userData)
  }
}
