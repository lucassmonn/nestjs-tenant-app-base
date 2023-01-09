import { PartialType } from "@nestjs/mapped-types"
import { CreateUserDto } from "./create-user.dto"

export class UpdateUserDto extends PartialType(CreateUserDto) {
  readonly name?: string
  readonly email?: string
  readonly password?: string
  readonly address?: string
  readonly phone?: string
}
