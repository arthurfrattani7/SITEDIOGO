import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import {
  ApiTags,
  ApiOperation,
  ApiConsumes,
  ApiBody,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { UploadApplication } from "application/applications/upload.Application";
import { JwtAuthGuard } from "application/guards/jwtAuth.Guard";
import { RolesGuard } from "application/guards/roles.Guard";
import { Roles } from "application/decorators/rolesDecorator";

@ApiTags("Upload")
@Controller("upload")
export class UploadController {
  constructor(private readonly uploadApplication: UploadApplication) {}

  @Post("post")
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("autor", "admin")
  @ApiOperation({ summary: "Faz o upload de uma imagem vinculada a um Post" })
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        postId: { type: "number", description: "ID do post" },
        file: { type: "string", format: "binary" },
      },
    },
  })
  @UseInterceptors(FileInterceptor("file"))
  async uploadPostImage(
    @Body("postId") postId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.uploadApplication.uploadPostImage(Number(postId), file);
  }
}
