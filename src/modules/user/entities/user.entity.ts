import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { BaseEntity } from "src/base/entity.base"

export type UserDocument = User & Document

@Schema({ timestamps: true })
export class User extends BaseEntity {
  @Prop({ required: true })
  email: string

  @Prop({ required: true })
  password: string

  @Prop({ required: true })
  name: string

  @Prop()
  address: string

  @Prop()
  phone: string

  @Prop({ default: "user" })
  role: string
}

export const UserSchema = SchemaFactory.createForClass(User)
