import { Injectable } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "secretKey",
    })
  }

  async validate(payload: {
    sub: string
    email: string
    role: string
  }): Promise<{ id: string; email: string; role: string }> {
    return { id: payload.sub, email: payload.email, role: payload.role }
  }
}
