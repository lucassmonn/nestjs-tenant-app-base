/* eslint-disable @typescript-eslint/no-empty-function */
import {
  TenancyModule,
  TenancyValidator,
} from "@needle-innovision/nestjs-tenancy"
import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { Tenant, TenantSchema } from "./entities/tenant.entity"
import { TenantConnectionProvider } from "./tenant-connection.provider"
import { TenantController } from "./tenant.controller"
import { TenantRepository } from "./tenant.repository"
import { TenantService } from "./tenant.service"
import { TenantValidator } from "./tenant.validator"

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tenant.name, schema: TenantSchema }]),
    TenancyModule.forRootAsync({
      imports: [TenantModule],
      useFactory: async (validator: TenantValidator) => {
        return {
          tenantIdentifier: "x-tenant",
          options: (): void => {},
          uri: (slug: string): string => `mongodb://localhost/${slug}`,
          validator: (slug: string): TenancyValidator =>
            validator.setTenantId(slug),
        }
      },
      inject: [TenantValidator],
    }),
  ],
  controllers: [TenantController],
  providers: [
    TenantService,
    TenantRepository,
    TenantValidator,
    TenantConnectionProvider,
  ],
  exports: [TenantService, TenantConnectionProvider, TenantValidator],
})
export class TenantModule {}
