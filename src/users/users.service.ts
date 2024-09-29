import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private users : any[] = [
        { 
            id: 1,
            name: 'Ivan',
            email: 'ivan@gmail.com'
        },
        {   id: 2,
            name: 'Luis',
            email: 'luis@gmail.com'
        },
        { 
            id: 3,
            name: 'Juan',
            email: 'juan@gmail.com'
        },
    ];

    getUsers() {
        return this.users
    }

    createUser(user: CreateUserDto) {

        this.users.push(user);
        return {
            ...user, 
            id: this.users.length + 1
        };
    }
}
