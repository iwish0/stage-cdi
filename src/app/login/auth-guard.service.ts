import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import {WebStorageService} from "../web-storage.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private webstorage: WebStorageService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.webstorage.isLoggedIn) { return true; }
        
        this.router.navigate(['/login']);
        return false;
     }
  
}