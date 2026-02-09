import { CategoryApplication } from 'application/applications/categories.Application';
import { CreateCategoryRequestDto } from 'presentation/dto/request/createCategoryRequestDto';
import { CategoryResponseDto } from 'presentation/dto/response/createResponse.dto';
export declare class CategoryController {
    private readonly categoryApplication;
    constructor(categoryApplication: CategoryApplication);
    findAll(): Promise<CategoryResponseDto[]>;
    create(dto: CreateCategoryRequestDto): Promise<CategoryResponseDto>;
}
