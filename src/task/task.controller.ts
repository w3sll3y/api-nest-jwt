import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/user/entities/user.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  async findAll(@CurrentUser() user: User) {
    return this.taskService.findAll(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateTaskDto, @CurrentUser() user: User) {
    return this.taskService.update(+id, data, user.id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @CurrentUser() user: User) {
    return this.taskService.delete(+id, user.id);
  }
}
