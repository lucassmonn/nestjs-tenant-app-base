import { DomainError } from "src/base/interfaces.base"

export const EmailIsAlreadyInUse = (email: string): DomainError => {
  return {
    message: `Email ${email} is already in use`,
    code: "EMAIL_IS_ALREADY_IN_USE",
    status: 400,
  }
}
