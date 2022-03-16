import { CategoryModel } from './../shared/model/category-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categorys: CategoryModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.categorys = [
      {
        id: 1,
        name: 'Mobile',
        topics: 10,
        color: 'blue',
        subcategory: [
          {
            id: 1,
            name: 'Jogos'
          },
          {
            id: 2,
            name: 'iOS'
          },
          {
            id: 2,
            name: 'Android'
          },
          {
            id: 3,
            name: 'React Native'
          }
        ]
      },
      {
        id: 1,
        name: 'Programação',
        topics: 10,
        color: 'green',
        subcategory: [
          {
            id: 1,
            name: 'Lógica de programação'
          },
          {
            id: 2,
            name: 'Python'
          },
          {
            id: 2,
            name: 'JavaScript'
          },
          {
            id: 3,
            name: 'ASP.Net'
          },
          {
            id: 3,
            name: 'TypeScript'
          }
        ]
      },

    ]
  }

}
