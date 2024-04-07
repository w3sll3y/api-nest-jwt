import { IsBoolean, IsNumber, IsString } from "class-validator";
import { Task } from "../entities/task.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto extends Task {
  @ApiProperty({
    description: 'Title task',
    example: 'Buy Coffee'
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Status todo',
    example: false
  })
  @IsBoolean()
  status: boolean;

  /**
   * User that created this todo
   * @example 1
   */
  @IsNumber()
  createdBy: number;
}
