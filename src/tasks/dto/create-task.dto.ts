import { IsString, MinLength } from "class-validator";

export class CreateTaskDto {

    @IsString()
    @MinLength(3)
    title: string
    
    @IsString()
    @MinLength(10)
    description: string
}