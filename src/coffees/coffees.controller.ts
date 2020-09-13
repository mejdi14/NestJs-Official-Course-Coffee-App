import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() pagintationHandler) {
    const {limit, offset} = pagintationHandler
    return `for this coffee we have ${limit} limits and ${offset} offsets`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `this is my update request for the id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this is my remove request for the id ${id}`
  }
}
