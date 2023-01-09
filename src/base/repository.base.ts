import { Injectable } from "@nestjs/common"
import { FilterQuery, Model } from "mongoose"

export interface Query {
  limit?: number
  skip?: number
  sort?: string
}

@Injectable()
export abstract class BaseRepository<T, CreateDto> {
  constructor(public model: Model<T>) {}

  async create(data: CreateDto): Promise<T> {
    return await this.model.create(data)
  }

  async findOne(filter: Record<string, unknown>): Promise<T> {
    return await this.model.findOne(filter)
  }

  async find(filter: FilterQuery<T> & Query): Promise<T[]> {
    const { limit, skip, sort, ...element } = filter
    return await this.model
      .find(element as T)
      .limit(limit)
      .skip(skip)
      .sort(sort ? JSON.parse(sort) : null)
      .lean()
  }

  async update(id: string, data: T): Promise<T> {
    return await this.model.findByIdAndUpdate(
      id,
      {
        $set: data,
      },
      { new: true }
    )
  }

  async delete(id: string): Promise<T> {
    return await this.model.findByIdAndDelete(id)
  }

  async exists(filter: FilterQuery<T>): Promise<boolean> {
    return !!(await this.model.exists(filter))
  }
}
