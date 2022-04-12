import { Injectable } from '@nestjs/common';

@Injectable()
export class  AppService {
  getHello(): string {
    return 'Hello NestJs 22 World!';
  }
}
