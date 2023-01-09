import { ObjectId } from "mongoose"

export abstract class BaseEntity {
  _id?: string | ObjectId
  createdAt?: Date
  updatedAt?: Date
}
