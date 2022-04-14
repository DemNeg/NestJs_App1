/* eslint-disable prettier/prettier */
import { HelmetMiddleware } from '@nest-middlewares/helmet';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstMiddleware } from './middlewares/first.middleware';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { SecondModule } from './second/second.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [SecondModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FirstMiddleware)
      .forRoutes(
        'hello',
        { path: 'todo/pipe', method: RequestMethod.POST },
        { path: 'todo/:id', method: RequestMethod.DELETE },
        { path: 'todo*', method: RequestMethod.PUT },
      )
      .apply(HelmetMiddleware)
      .forRoutes('');
    //.apply(LoggerMiddleware)
    //.forRoutes('');
  }
}
