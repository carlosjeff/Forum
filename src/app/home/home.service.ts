import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }



  getColor(color?: string){

    const nameColor = color?.length == 0 ? 'blue' : color
     return `var(--${nameColor}-500)`
   }
}
