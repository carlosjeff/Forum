import { TopicModel } from './../../shared/model/topic-model';
import { Component, Input, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/shared/model/category-model';
import { HomeService } from '../home.service';
import { TopicSubcategoryModel } from 'src/app/shared/model/topic-subcategory-model';

@Component({
  selector: 'app-home-topics',
  templateUrl: './home-topics.component.html',
  styleUrls: ['./home-topics.component.scss']
})
export class HomeTopicsComponent implements OnInit {

  @Input() categorys: CategoryModel[] = [];
  @Input() topics: TopicModel[] = [];

  categorysFilter: CategoryModel[] = []

  categorySelect!: CategoryModel

  constructor(private homeServices: HomeService) { }

  ngOnInit(): void {
    this.categorysFilter = this.categorys?.slice();
  }

  getColor(color?: string){
    return this.homeServices.getColor(color);
  }

  nameColor(data: TopicSubcategoryModel[]){
    let name = '';
    if(data.length > 0){
     name = data[0].subcategory?.category?.color!;
    }
    return name
  }

}
