import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { BaseRepository } from "src/base/repository.base"
import { CreateTenantDto } from "./dto/create-tenant.dto"
import { Tenant } from "./entities/tenant.entity"

@Injectable()
export class TenantRepository extends BaseRepository<Tenant, CreateTenantDto> {
  constructor(@InjectModel(Tenant.name) tenantModel: Model<Tenant>) {
    super(tenantModel)
  }
}
