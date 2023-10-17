import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './models/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm';
import { User } from 'models/users/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({ ...TypeOrmConfig.config(), autoLoadEntities: true, entities: [User] }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
