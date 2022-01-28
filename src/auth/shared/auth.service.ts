import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/shared/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService){}

    async validateUser(userEmail: string, pass: string){
        const user = await this.usersService.getByEmail(userEmail)
        if(user && user.password == pass){
            const {_id: id, name, email} = user
            return {_id: id, name, email}
        }

        return null
    }
}
