import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) return true;

    const { user } = context.switchToHttp().getRequest();
    
    // Verifica se o 'type' do utilizador está na lista permitida
    const hasRole = requiredRoles.includes(user.type);

    if (!hasRole) {
      throw new ForbiddenException('Apenas autores podem realizar esta ação.');
    }

    return true;
  }
}