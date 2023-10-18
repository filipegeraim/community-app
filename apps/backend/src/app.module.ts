import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './models/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig, validationSchemaForEnv } from './config';
import { User } from 'models/users/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validationSchema: validationSchemaForEnv }),
    TypeOrmModule.forRoot({ ...TypeOrmConfig.config() }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
