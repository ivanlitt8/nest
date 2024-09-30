import { Controller, Delete,Patch, Get, Post, Put, Body, Query, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {
    }

    @ApiOperation({summary: 'Get all tasks'})
    @ApiResponse({status: 200, description: 'Success'})
    @ApiResponse({status: 403, description: 'Forbidden'})
    @Get()
    getAllTasks(@Query() query:any) {
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTasks(@Param('id') id:string) {
        return this.tasksService.getTask(parseInt(id));
    }

    @ApiOperation({summary: 'Create a new task'})
    @Post()
    createTasks(@Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTasks(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTask(task);
    }

    @Delete()
    deleteTasks() {
        return this.tasksService.deleteTask();
    }

    @Patch()
    updateTasksStatus() {
        return this.tasksService.updateTaskStatus();
    }
}