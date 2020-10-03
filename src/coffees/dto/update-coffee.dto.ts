import { CreateCoffeeDto } from './create-coffee.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto){

}
