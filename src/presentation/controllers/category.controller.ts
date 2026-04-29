import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
} from "@nestjs/swagger";
import { CategoryApplication } from "application/applications/categories.Application";
import { CreateCategoryRequestDto } from "presentation/dto/request/category/createCategoryRequestDto";
import { CategoryResponseDto } from "presentation/dto/response/createResponse.dto";
import { Roles } from "application/decorators/rolesDecorator";
import { RolesGuard } from "application/guards/roles.Guard";
import { JwtAuthGuard } from "application/guards/jwtAuth.Guard";
import { ApiBearerAuth } from "@nestjs/swagger";
import { UseGuards } from "@nestjs/common";

@ApiBearerAuth()
@ApiTags("Categories")
@Controller("categories")
export class CategoryController {
  constructor(private readonly categoryApplication: CategoryApplication) {}

  @Get()
  @ApiOperation({ summary: "Lista todas as categorias do blog" })
  @ApiOkResponse({ type: [CategoryResponseDto] })
  async findAll(): Promise<CategoryResponseDto[]> {
    return await this.categoryApplication.listAllCategories();
  }

  @Post()
  @ApiOperation({ summary: "Cria uma nova categoria" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  @ApiCreatedResponse({
    description: "Categoria criada com sucesso.",
    type: CategoryResponseDto,
  })
  async create(
    @Body() dto: CreateCategoryRequestDto,
  ): Promise<CategoryResponseDto> {
    return await this.categoryApplication.createCategory(dto);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Atualiza o nome de uma categoria" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  async update(
    @Param("id") id: string,
    @Body() updateDto: CreateCategoryRequestDto,
  ) {
    return await this.categoryApplication.updateCategory(
      Number(id),
      updateDto.name,
    );
  }

  @Delete(":id")
  @ApiOperation({ summary: "Remove uma categoria do blog" })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  async remove(@Param("id") id: string) {
    return await this.categoryApplication.deleteCategory(Number(id));
  }
}
