import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoffeeDto {
  @ApiProperty({description: 'this is the name of the coffee'})
  @IsString()
  readonly name: string;
  @ApiProperty({description: 'this is the brand of the coffee'})
  @IsString()
  readonly brand: string;
  @ApiProperty({ example: ['mejdi', 'hseeen', 'hawsi']})
  @IsString({each: true})
  readonly flavors: string[];
}
