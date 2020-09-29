import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entitie';
import { Flavor } from './entities/flavor.entitie';
import { Event } from '../events/entities/event.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Coffee,Flavor, Event])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
  exports: [CoffeesService]})

export class CoffeesModule {

}
