import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly useService: UserService) { }
  async validateUser(email: string, password: string) {
    const user = await this.useService.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined
        };
      }
    }

    throw new Error('Email address or password is incorrect');
  }
}
