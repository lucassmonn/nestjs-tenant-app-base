import { Injectable } from "@nestjs/common"
import { FilterQuery } from "mongoose"
import { BaseRepository, Query } from "./repository.base"

@Injectable()
export abstract class BaseService<T, CreateDto> {
  constructor(private readonly baseRepository: BaseRepository<T, CreateDto>) {}

  async findOne(filter: Record<string, unknown>): Promise<T> {
    return await this.baseRepository.findOne(filter)
  }

  async find(filter: FilterQuery<T> & Query): Promise<T[]> {
    return await this.baseRepository.find(filter)
  }

  async create(item: CreateDto): Promise<T> {
    return await this.baseRepository.create(item)
  }

  async update(id: string, item: T): Promise<T> {
    return await this.baseRepository.update(id, item)
  }

  async delete(id: string): Promise<T> {
    return await this.baseRepository.delete(id)
  }

  async exists(filter: FilterQuery<T>): Promise<boolean> {
    return await this.baseRepository.exists(filter)
  }
}
