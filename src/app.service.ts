import { Injectable } from '@nestjs/common';
import { RequestBody } from './app.controller';

@Injectable()
export class AppService {
  doSomething(body: RequestBody): void {
    const facts: Record<string, string> = {};
    facts[body.theUserInput] = body.anotherUserInput;
  }
}
