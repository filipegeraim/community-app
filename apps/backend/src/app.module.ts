import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './models/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig, validationSchemaForEnv } from './config';
import { PostModule } from './models/post/post.module';
import { AuthModule } from 'auth/auth.module';
import { JwtAuthGuard } from 'auth';
import { APP_GUARD } from '@nestjs/core';
import { ReplyModule } from './models/reply/reply.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validationSchema: validationSchemaForEnv }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        ...TypeOrmConfig.config(configService),
      }),
    }),
    AuthModule,
    UserModule,
    PostModule,
    ReplyModule,
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
