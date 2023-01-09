import { Body, Controller, Post } from "@nestjs/common"
import { BaseController } from "src/base/controller.base"
import { CreateTenantDto } from "./dto/create-tenant.dto"
import { Tenant } from "./entities/tenant.entity"
import { TenantService } from "./tenant.service"

@Controller("tenant")
export class TenantController extends BaseController<Tenant, CreateTenantDto> {
  constructor(private readonly tenantsService: TenantService) {
    super(tenantsService)
  }

  @Post()
  async create(@Body() tenant: CreateTenantDto): Promise<Tenant> {
    return await super.create(tenant)
  }
}
