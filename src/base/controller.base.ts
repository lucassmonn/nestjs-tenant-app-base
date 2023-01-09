import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { FilterQuery } from "mongoose"
import { ErrorBase } from "./exception.base"
import { Query as QueryInterface } from "./repository.base"
import { BaseService } from "./service.base"

@Controller("base")
export abstract class BaseController<T, CreateDto> {
  constructor(private service: BaseService<T, CreateDto>) {}

  @UseGuards(AuthGuard("jwt"))
  @Post()
  async create(@Body() create: CreateDto): Promise<T> {
    try {
      return await this.service.create(create)
    } catch (e) {
      throw new ErrorBase(e)
    }
  }

  @UseGuards(AuthGuard("jwt"))
  @Get()
  async find(@Query() query: FilterQuery<T> & QueryInterface): Promise<T[]> {
    try {
      return await this.service.find(query)
    } catch (e) {
      throw new ErrorBase(e)
    }
  }

  @UseGuards(AuthGuard("jwt"))
  @Get(":id")
  async findOne(@Param("id") id: string): Promise<T> {
    try {
      return await this.service.findOne({ id })
    } catch (e) {
      throw new ErrorBase(e)
    }
  }

  @UseGuards(AuthGuard("jwt"))
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateUserDto: Partial<T>
  ): Promise<T> {
    try {
      return await this.service.update(id, updateUserDto as T)
    } catch (e) {
      throw new ErrorBase(e)
    }
  }

  @UseGuards(AuthGuard("jwt"))
  @Delete(":id")
  async delete(@Param("id") id: string): Promise<T> {
    try {
      return await this.service.delete(id)
    } catch (e) {
      throw new ErrorBase(e)
    }
  }
}
