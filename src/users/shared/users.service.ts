import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from './users';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async getAll(){
        return await this.userModel.find().exec()
    }

    async getById(id: string){
        return await this.userModel.findById(id).exec()
    }

    async getByEmail(email: string){
        return await this.userModel.findOne({email}).exec()
    }

    async create(user: CreateUserDto): Promise<User>{
        const createdUser = new this.userModel(user)
        return await createdUser.save()
    }
}
