import { Injectable, HttpCode, NotFoundException} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User {
    id: number;
    name: string;
    age: number;
}

@Injectable()
export class TasksService {

    private tasks = [];

    getTask(id: number) {
       const taskFound = this.tasks.find(task => task.id === id);

       if (!taskFound) {
            return new NotFoundException(`Task with id ${id} not found`);
        }
       return taskFound;
    }

    createTask(task: CreateTaskDto) {
        this.tasks.push({ 
            ...task,
            id: this.tasks.length + 1,
        });
        return task;
    }

    getTasks() {
        return this.tasks
     }

    updateTask(task: UpdateTaskDto) {
        return 'actualizando tarea';
    }

    deleteTask() {
        return 'eliminado tarea';
    }

    updateTaskStatus() {
        return 'actualizando status de tareas';
    }
}