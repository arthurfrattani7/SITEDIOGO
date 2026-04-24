import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryRequestDto {
  @ApiProperty({ 
    example: 'Tecnologia', 
    description: 'Nome único da categoria que será criada' 
  })
  name: string; 
}