import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

export class RequestBody {
  theUserInput: string;
  anotherUserInput: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('something')
  getSomething(@Body() body: RequestBody): void {
    this.appService.doSomething(body);
  }
}
