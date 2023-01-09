import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { ErrorBase } from "src/base/exception.base"
import { RequestWithUser } from "src/base/interfaces.base"
import { User } from "src/modules/user/entities/user.entity"
import { UserService } from "src/modules/user/user.service"
import { AuthService } from "./auth.service"
import { LoginDto } from "./dto/login.dto"
import { AccessTokenDto } from "./dto/token.dto"

@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UserService
  ) {}

  @Post("login")
  async login(@Body() login: LoginDto): Promise<AccessTokenDto | Error> {
    try {
      return await this.authService.login(login.email, login.password)
    } catch (e) {
      throw new ErrorBase(e)
    }
  }

  @UseGuards(AuthGuard("jwt"))
  @Get("me")
  async me(@Request() req: RequestWithUser): Promise<User> {
    try {
      return await this.usersService.findOne({ email: req.user.email })
    } catch (e) {
      throw new ErrorBase(e)
    }
  }
}
