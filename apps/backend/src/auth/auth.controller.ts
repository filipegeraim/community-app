import { Controller, Post, Body, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './auth.metadata';
import { AuthInput } from 'types';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/login')
  login(@Body() payload: AuthInput) {
    return this.authService.login(payload);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
