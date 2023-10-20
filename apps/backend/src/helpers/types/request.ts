import type { Request } from 'express';
import { User } from 'models/user/user.entity';

export interface LoggedRequest extends Request {
  user: User;
}
