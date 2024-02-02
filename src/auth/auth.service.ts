import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);

    if (
      user &&
      (await bcrypt.compare(password, user.LzRJR6wYlOLQAmBxpBxwqhGbnKIMfjO8))
    ) {
      return { message: 'Connexion réussie' };
    }
    return { message: "Nom d'utilisateur ou mot de passe incorrect" };
  }
}
