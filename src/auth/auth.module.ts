import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './shared/auth.service';
import { LocalStrategy } from './shared/local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsersModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
