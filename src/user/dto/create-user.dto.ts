import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
  @ApiProperty({
    description: 'E-mail user to login in platform',
    example: 'nickolas.tesla@mail.com'
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password User to login in platform',
    example: 'Tesla@123'
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @ApiProperty({
    description: 'Name User',
    example: 'Nickolas Tesla'
  })
  @IsString()
  name: string;
}