import { Controller, Post, Body, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './auth.metadata';
import { AuthInput, UserInput } from 'types';
import { UserService } from 'models/user/user.service';

@Controller('/auth')
export class AuthController {
  constructor(readonly authService: AuthService, readonly userService: UserService) {}

  @Public()
  @Post('/login')
  login(@Body() payload: AuthInput) {
    return this.authService.login(payload);
  }

  @Public()
  @Post('/register')
  register(@Body() payload: UserInput) {
    return this.userService.create(payload);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
