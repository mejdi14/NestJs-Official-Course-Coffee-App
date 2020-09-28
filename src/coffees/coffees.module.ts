import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entitie';
import { Flavor } from './entities/flavor.entitie';

@Module({
  imports:[TypeOrmModule.forFeature([Coffee,Flavor])],
  controllers: [CoffeesController], providers: [CoffeesService]})
export class CoffeesModule {

}
