import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateTaskDto) {
    const task = await this.prisma.tasks.create({
      data
    });
  }

  async findAll(createdBy: number) {
    return this.prisma.tasks.findMany({
      where: {
        createdBy,
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  async update(id: number, data: UpdateTaskDto) {
    const taskExists = await this.prisma.tasks.findUnique({
      where: {
        id,
      }
    })

    if (!taskExists) {
      throw new Error("task does not exist")
    }

    return await this.prisma.tasks.update({
      data,
      where: {
        id
      }
    })
  }

  async delete(id: number) {
    const taskExists = await this.prisma.tasks.findUnique({
      where: {
        id,
      }
    })

    if (!taskExists) {
      throw new Error("task does not exist")
    }

    return await this.prisma.tasks.delete({
      where: {
        id
      }
    })
  }
}
