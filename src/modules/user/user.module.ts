import { TenancyModule } from "@needle-innovision/nestjs-tenancy"
import { Module } from "@nestjs/common"
import { TenantModule } from "../tenant/tenant.module"
import { User, UserSchema } from "./entities/user.entity"
import { UserController } from "./user.controller"
import { UserRepository } from "./user.repository"
import { UserService } from "./user.service"

@Module({
  imports: [
    TenancyModule.forFeature([{ name: User.name, schema: UserSchema }]),
    TenantModule,
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
