import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient,
              private router: Router) { }


  login(user: User) : Observable<any> {

    // return this.httpClient.post<any>(this.apiUrl + '/login', user).pipe(
    //   tap((response) => {
    //     if(!response.success) return;

    //     localStorage.setItem('token', btoa(JSON.stringify(response['token'])));
    //     localStorage.setItem('user', btoa(JSON.stringify(response['usuario'])));

    //     this.router.navigate([''])
    //   })
    // )

    return this.mockUsuarioLogin(user).pipe(tap((response) => {
      if(!response.success) return;
      localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")));
      localStorage.setItem('user', btoa(JSON.stringify(user)));
      this.router.navigate(['']);
    }));
  }

  private mockUsuarioLogin(user: User): Observable<any> {

    var returnMock: any = [];

    if(user.email === "hello@balta.io" && user.senha == "123"){
      returnMock.success = true;
      returnMock.user = user;
      returnMock.token = "TokenQueSeriaGeradoPelaAPI";
      return of(returnMock);
    }

    returnMock.success = false;
    returnMock.user = user;
    return of(returnMock);
  }

  logOut(){

    localStorage.clear();
    this.router.navigate(['']);
  }

  get getUser(): User{

    return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user')!)) : null
  }

  get getIdUser(): string{
    return localStorage.getItem('user') ? (JSON.parse(atob(localStorage.getItem('user')!)) as User).id! : '';
  }

  get getTokenUser(): string{

    return localStorage.getItem('token') ? JSON.parse(atob(localStorage.getItem('token')!)) : null;
  }

  get logged(): boolean{

    return !!localStorage.getItem('token');
  }

}
