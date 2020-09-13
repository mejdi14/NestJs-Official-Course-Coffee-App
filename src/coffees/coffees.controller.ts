import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get(':id')
  findAll(@Param() params) {
    return `showing the number ${params.id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
