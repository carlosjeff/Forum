import { TopicModel } from './../../shared/model/topic-model';
import { DataService } from './../../shared/service/data.service';
import { HomeService } from './../home.service';
import { CategoryModel } from '../../shared/model/category-model';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TopicSubcategoryModel } from 'src/app/shared/model/topic-subcategory-model';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class HomecategoryComponent implements OnInit{

  //categorysAll?: CategoryModel[];

  categorys: CategoryModel[] = []

  topics: TopicModel[] = []

  constructor(private homeServices: HomeService) { }

  ngOnInit(): void {
    this.homeServices.getCategorys.subscribe(data => this.categorys = data.slice());
    this.homeServices.getTopics.subscribe(data => {

    //      const topicArrey: TopicModel[] = value.filter(t =>  {
    //   return !t.subcategorys?.findIndex(s => s.subcategory?.categoryId == categoryId)
    // })


      this.topics = data.slice()

    })
  }



  getNumberTopics(categoryId: number){
    return this.homeServices.getNumberTopycsCategorys(this.topics, categoryId);
  }

  getColor(color?: string){
    return this.homeServices.getColor(color);
  }



}
