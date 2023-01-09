import { Injectable } from "@nestjs/common"
import { BaseService } from "src/base/service.base"
import { useDb } from "src/utils/use_db"
import { CreateTenantDto } from "./dto/create-tenant.dto"
import { Tenant } from "./entities/tenant.entity"
import { TenantAlreadyExists } from "./tenant.exceptions"
import { TenantRepository } from "./tenant.repository"

@Injectable()
export class TenantService extends BaseService<Tenant, CreateTenantDto> {
  constructor(private tenantRepository: TenantRepository) {
    super(tenantRepository)
  }

  async create(tenant: CreateTenantDto): Promise<Tenant> {
    if (await this.exists({ slug: tenant.slug }))
      throw TenantAlreadyExists(tenant.slug)

    await useDb(async (client) => {
      await client.db(tenant.slug).createCollection("users")
    })

    return await this.tenantRepository.create(tenant)
  }
}
