import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'helpers/encryption';
import { User } from 'models/user/user.entity';
import { UserService } from 'models/user/user.service';
import { AuthInput, AuthOutput } from 'types';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  private async validate(payload: AuthInput): Promise<User> {
    const user = await this.userService.findByEmail(payload.email.toLowerCase().trim());
    if (user && comparePassword(payload.password, user.password)) {
      return user;
    }
    throw new ForbiddenException();
  }

  async login(payload: AuthInput): Promise<AuthOutput> {
    const user = await this.validate(payload);
    return {
      accessToken: this.jwtService.sign({ user }),
      prefix: 'Bearer',
    };
  }
}
