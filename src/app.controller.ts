/* eslint-disable prettier/prettier */
import { Body, Controller, Get } from '@nestjs/common';

export class RequestBody {
  theUserInput: string;
  anotherUserInput: string;
}

@Controller()
export class AppController {
  @Get('vulnerability')
  vulnerable(@Body() body: RequestBody): void {
    const facts: Record<string, string> = {};
    facts[body.theUserInput] = body.anotherUserInput;
  }
  @Get('not-vulnerability')
  notVulnerable(@Body() body: RequestBody): void {
    const facts: Record<string, string> = {};
    facts[body.theUserInput] = body.anotherUserInput;
  }
}
