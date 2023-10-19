import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'models/user/user.entity';

export const CurrentUser = createParamDecorator<unknown, ExecutionContext, User>(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
