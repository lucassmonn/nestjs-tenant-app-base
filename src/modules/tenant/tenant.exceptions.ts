import { DomainError } from "src/base/interfaces.base"

export const TenantAlreadyExists = (slug: string): DomainError => {
  return {
    message: `Tenant ${slug} already exists`,
    status: 400,
    code: "TENANT_ALREADY_EXISTS",
  }
}

export const TenantNotFound = (slug: string): DomainError => {
  return {
    message: `Tenant ${slug} not found`,
    status: 400,
    code: "TENANT_NOT_FOUND",
  }
}

export const TenantError = (error: Error): DomainError => {
  return {
    message: error.message || `An error occurred while creating the tenant`,
    status: 500,
    code: "TENANT_ERROR",
  }
}
