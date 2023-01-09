import { Injectable } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { UserService } from "src/modules/user/user.service"
import { InvalidEmailOrPassword } from "./auth.exception"
import { AccessTokenDto } from "./dto/token.dto"

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UserService
  ) {}

  async login(email: string, password: string): Promise<AccessTokenDto> {
    const user = await this.usersService.findOne({ email })
    if (!(user && user.password === password)) throw InvalidEmailOrPassword()
    return {
      access_token: this.jwtService.sign({
        email: user.email,
        sub: user._id,
        role: user.role,
      }),
    }
  }
}
