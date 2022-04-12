import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecondModule } from './second/second.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [SecondModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
