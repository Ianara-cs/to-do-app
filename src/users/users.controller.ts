import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './shared/users';
import { UsersService } from './shared/users.service';


@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ){}

    @Get()
    async getAll(): Promise<User[]>{
        return this.usersService.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<User>{
        return this.usersService.getById(id)
    }

    @Post()
    async create(@Body() user: CreateUserDto): Promise<User>{
        return this.usersService.create(user)
    }
}
