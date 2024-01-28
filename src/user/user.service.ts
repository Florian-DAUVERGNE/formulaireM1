// user.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      userId: 1,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
  ];

  async findByUsername(username: string): Promise<any> {
    return this.users.find((user) => user.username == username);
  }
}
