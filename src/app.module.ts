import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import {MongooseModule} from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:apptask@projeto1.dhtdc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    TasksModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}
