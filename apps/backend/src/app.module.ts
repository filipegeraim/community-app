import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './models/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig, validationSchemaForEnv } from './config';
import { PostModule } from './models/post/post.module';
import { AuthModule } from 'auth/auth.module';
import { JwtAuthGuard } from 'auth';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validationSchema: validationSchemaForEnv }),
    TypeOrmModule.forRoot({ ...TypeOrmConfig.config() }),
    AuthModule,
    UserModule,
    PostModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
