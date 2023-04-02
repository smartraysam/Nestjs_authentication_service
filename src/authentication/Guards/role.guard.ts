import { Type, CanActivate, ExecutionContext, mixin } from '@nestjs/common';
import Role from 'src/users/role.enum';
import RequestWithUser from '../interface/requestWithUser.interface';
import JwtAuthenticationGuard from './jwt-authentication.guard';

const RoleGuard = (role: Role): Type<CanActivate> => {
  class RoleGuardMixin extends JwtAuthenticationGuard {
    async canActivate(context: ExecutionContext) {
      await super.canActivate(context);

      const request = context.switchToHttp().getRequest<RequestWithUser>();
      const user = request.user;

      return user?.role.includes(role);
    }
  }

  return mixin(RoleGuardMixin);
};

export default RoleGuard;
