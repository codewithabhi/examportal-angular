import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, createUrlTreeFromSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const oauthService: LoginService = inject(LoginService);
    
  if (oauthService.isLoggedIn()  && oauthService.getUserRole()=="ADMIN") {
    return true;
  }
  else
  return createUrlTreeFromSnapshot(route,['/','user']);
  
};

