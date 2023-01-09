import { TenancyValidator } from "@needle-innovision/nestjs-tenancy"
import { Injectable } from "@nestjs/common"
import { ErrorBase } from "src/base/exception.base"
import { TenantNotFound } from "./tenant.exceptions"
import { TenantService } from "./tenant.service"

@Injectable()
export class TenantValidator implements TenancyValidator {
  private _slug: string

  constructor(private readonly tenantService: TenantService) {}

  setTenantId(slug: string): TenancyValidator {
    this._slug = slug
    return this
  }

  async validate(): Promise<void> {
    const exist = await this.tenantService.exists({ name: this._slug })
    if (!exist) {
      throw new ErrorBase(TenantNotFound(this._slug))
    }
  }
}
