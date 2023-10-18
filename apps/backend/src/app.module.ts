import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './models/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig, validationSchemaForEnv } from './config';
import { PostModule } from './models/post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validationSchema: validationSchemaForEnv }),
    TypeOrmModule.forRoot({ ...TypeOrmConfig.config() }),
    UserModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
