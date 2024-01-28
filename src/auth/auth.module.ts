// auth.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service'; // Assurez-vous d'importer le UserService
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [PassportModule],
  providers: [AuthService, LocalStrategy, UserService], // Ajoutez UserService aux providers
})
export class AuthModule {}
