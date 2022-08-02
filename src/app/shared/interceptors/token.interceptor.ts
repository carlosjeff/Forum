import { UserService } from './../service/user.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.userService.getTokenUser;
    const requestUrl: Array<any> = request.url.split('/');
    const apiUrl: Array<any> = environment.apiUrl.split('/');

    if(token && requestUrl[2] === apiUrl[2]){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          token: `${token}`
        }
      });
      return next.handle(request).pipe(catchError(err => {
        if(err instanceof HttpResponse && err.status == 401){
          this.userService.logOut();
        }
          return throwError(err.message)
      }))
    }else{

      return next.handle(request);
    }


  }
}
