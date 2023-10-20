import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoggedRequest } from 'helpers/types/request';

@Injectable()
export class CreatedByInterceptor<T> implements NestInterceptor<T, T> {
  intercept(context: ExecutionContext, handler: CallHandler<T>): Observable<T> {
    const req: LoggedRequest = context.switchToHttp().getRequest();
    req.body.createdBy = req.user;
    return handler.handle();
  }
}
