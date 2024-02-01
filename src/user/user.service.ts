import { Model } from 'mongoose';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { CreateUserDto } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    if (
      !this.isSHA256(createUserDto.password) ||
      !this.isSHA256(createUserDto.username)
    ) {
      throw new BadRequestException(
        'Les données envoyées ne sont pas au bon format',
      );
    }

    const existingUser = await this.findByUsername(createUserDto.username);

    if (existingUser) {
      return { message: 'Cet utilisateur existe déjà' };
    }

    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);

    const createdUser = new this.userModel(createUserDto);
    if (createdUser.save()) {
      return { message: 'Utilisateur créé avec succés' };
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findByUsername(username: string) {
    if (!this.isSHA256(username)) {
      throw new BadRequestException(
        'Les données envoyées ne sont pas au bon format',
      );
    }

    return this.userModel.findOne({ username }).exec();
  }

  private isSHA256(value: string): boolean {
    const sha256Regex = /^[a-fA-F0-9]{64}$/;

    return sha256Regex.test(value);
  }
}
