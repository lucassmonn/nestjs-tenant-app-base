import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { MongooseModule } from "@nestjs/mongoose"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { AuthModule } from "./modules/auth/auth.module"
import { TenantModule } from "./modules/tenant/tenant.module"
import { UserModule } from "./modules/user/user.module"
import { connectionString } from "./utils/connection_string"

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(connectionString()),
    UserModule,
    AuthModule,
    TenantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
