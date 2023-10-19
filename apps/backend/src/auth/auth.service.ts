import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'helpers/encryption';
import { User } from 'models/user/user.entity';
import { UserService } from 'models/user/user.service';
import type { AuthInput, AuthJwt, AuthOutput } from 'types';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  private async validate(payload: AuthInput): Promise<User> {
    const user = await this.userService.findByEmail(payload.email.toLowerCase().trim());
    if (user && comparePassword(payload.password, user.password)) {
      return user;
    }
    throw new UnauthorizedException();
  }

  async login(payload: AuthInput): Promise<AuthOutput> {
    const user = await this.validate(payload);
    const jwt: AuthJwt = { sub: user.id, name: user.name };
    return {
      accessToken: this.jwtService.sign(jwt),
      prefix: 'Bearer',
    };
  }
}
