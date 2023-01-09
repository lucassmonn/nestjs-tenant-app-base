import { DomainError } from "src/base/interfaces.base"

export const InvalidEmailOrPassword = (): DomainError => {
  return {
    message: `Invalid email or password`,
    status: 401,
    code: "INVALID_LOGIN",
  }
}
