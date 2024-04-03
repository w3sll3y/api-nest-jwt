import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10)
    };

    const createdUser = await this.prisma.user.create({ data });
    return {
      ...createUserDto,
      password: undefined
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}