import { IsBoolean, IsString } from "class-validator";
import { Task } from "../entities/task.entity";

export class CreateTaskDto extends Task {
  @IsString()
  title: string;

  @IsBoolean()
  status: boolean;

  @IsString()
  createdBy: number;
}
