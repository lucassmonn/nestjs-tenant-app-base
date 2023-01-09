import { HttpException } from "@nestjs/common"
import { DomainError } from "./interfaces.base"

export class ErrorBase extends HttpException {
  constructor(error: DomainError) {
    super(
      {
        message: error.message,
        status: error.status || 500,
        code: error.code || "INTERNAL_SERVER_ERROR",
      },
      error.status || 500
    )
  }
}
