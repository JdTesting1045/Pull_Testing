import { Module } from '@nestjs/common';
import { User } from './user.controller';


@Module({

  controllers: [User],

})
export class AppModule {}
