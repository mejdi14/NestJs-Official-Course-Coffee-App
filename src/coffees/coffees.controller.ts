import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

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

  @Patch(':id')
  update(@Param('id') id: string) {
    return `this is my update request for the id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this is my remove request for the id ${id}`
  }
}
