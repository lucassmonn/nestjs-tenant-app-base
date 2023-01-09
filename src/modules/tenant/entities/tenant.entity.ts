import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { BaseEntity } from "src/base/entity.base"

@Schema({ timestamps: true })
export class Tenant extends BaseEntity {
  @Prop()
  name: string

  @Prop()
  slug: string
}

export const TenantSchema = SchemaFactory.createForClass(Tenant)
