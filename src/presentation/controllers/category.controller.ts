import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CategoryApplication } from 'application/applications/categories.Application';
import { CreateCategoryRequestDto } from 'presentation/dto/request/createCategoryRequestDto';
import { CategoryResponseDto } from 'presentation/dto/response/createResponse.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryApplication: CategoryApplication) {}

  @Get()
  @ApiOperation({ summary: 'Lista todas as categorias do blog' })
  @ApiOkResponse({ type: [CategoryResponseDto] })
  async findAll(): Promise<CategoryResponseDto[]> {
    return await this.categoryApplication.listAllCategories();
  }

  @Post()
  @ApiOperation({ summary: 'Cria uma nova categoria' })
  @ApiCreatedResponse({ 
    description: 'Categoria criada com sucesso.',
    type: CategoryResponseDto 
  })
  async create(@Body() dto: CreateCategoryRequestDto): Promise<CategoryResponseDto> {
    return await this.categoryApplication.createCategory(dto);
  }
}