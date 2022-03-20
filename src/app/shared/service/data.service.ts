import { OptionsPage } from './../model/options-page';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://localhost:44398/';
  private headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getAll<T>(coll: string){
    return this.http.get<T>(`${this.url}api/${coll}`);
  }


  getPagination<T>(coll: string, options: OptionsPage){
    return this.http.post<T>(`${this.url}api/${coll}/pagination`,options)
  }
}
