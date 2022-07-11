import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedUserGuard implements CanActivate {

  constructor(private router: Router,
              private userService: UserService) { }


  canActivate(){

    return !!(this.userService.logged ? true : this.router.navigate(['']))
  }

}
