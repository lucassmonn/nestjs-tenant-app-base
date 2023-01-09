import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateUserDto {
  @IsString()
  readonly name: string

  @IsEmail()
  readonly email: string

  @IsNotEmpty()
  readonly password: string

  @IsOptional()
  @IsString()
  readonly role?: string
}
