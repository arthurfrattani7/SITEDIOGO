import { Request } from 'express';
import { Request as NestRequest } from '@nestjs/common';

export interface RequestWithUser extends Request {
  user: {
    sub: number;
    email: string;
    type: 'leitor' | 'autor' | 'admin';
  };
}