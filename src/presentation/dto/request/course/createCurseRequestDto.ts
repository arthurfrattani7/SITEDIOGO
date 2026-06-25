import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCourseRequestDto {
  @ApiProperty({ example: 'Curso Completo de Direito Administrativo', description: 'Título principal do curso' })
  @IsString({ message: 'O título deve ser um texto' })
  @IsNotEmpty({ message: 'O título é obrigatório' })
  title: string;

  @ApiProperty({ example: 'bg-blue-600', description: 'Classe CSS do background do card' })
  @IsString({ message: 'A classe de background deve ser um texto' })
  @IsNotEmpty({ message: 'A classe de background é obrigatória' })
  bgClass: string | null;

  @ApiProperty({ example: 'https://example.com/images/course-image.jpg', description: 'URL da imagem do curso' })
  @IsString({ message: 'A URL da imagem deve ser um texto' })
  @IsNotEmpty({ message: 'A URL da imagem é obrigatória' })
  imageUrl: string | null;

  @ApiProperty({ example: 'Domine todos os conceitos de atos administrativos...', description: 'Descrição detalhada do curso' })
  @IsString({ message: 'A descrição deve ser um texto' })
  @IsNotEmpty({ message: 'A descrição é obrigatória' })
  description: string;

  @ApiProperty({ example: '60 horas', description: 'Duração total do curso' })
  @IsString({ message: 'A duração deve ser um texto' })
  @IsNotEmpty({ message: 'A duração é obrigatória' })
  duration: string;

  @ApiProperty({ example: 12, description: 'Quantidade total de módulos' })
  @IsNumber({}, { message: 'O número de módulos deve ser um valor numérico' })
  @IsNotEmpty({ message: 'A quantidade de módulos é obrigatória' })
  modules: number;

  @ApiProperty({ example: 'Intermediário', description: 'Nível do curso' })
  @IsString({ message: 'O nível deve ser um texto' })
  @IsNotEmpty({ message: 'O nível é obrigatório' })
  level: string;

  @ApiProperty({
    example: ['Acesso vitalício', 'Aulas em áudio e PDF', 'Simulados comentados'],
    description: 'Lista de vantagens do curso',
    type: [String]
  })
  @IsArray({ message: 'Os benefícios devem ser fornecidos em formato de array' })
  @IsString({ each: true, message: 'Cada benefício dentro da lista deve ser um texto' })
  benefits: string[];

  @ApiProperty({ example: 'https://pay.hotmart.com/ABC12345X', description: 'Link de checkout da Hotmart' })
  @IsString({ message: 'O link da Hotmart deve ser um texto' })
  @IsNotEmpty({ message: 'O link da Hotmart é obrigatório' })
  hotmartLink: string;
}