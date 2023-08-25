import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {
  const oauthService: LoginService = inject(LoginService);
    
  if (oauthService.isLoggedIn()) {
    return true;
  }
  else
  return createUrlTreeFromSnapshot(route,['/','login']);
};
