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

  @Input() categorysAll?: CategoryModel[];

  categorys: CategoryModel[] = []

  topics: TopicSubcategoryModel[] = []

  constructor(private homeServices: HomeService, private ds: DataService) { }



  ngOnInit(): void {
    this.ds.getAll<CategoryModel[]>('Categorys').subscribe(data =>{
      this.categorys = data.slice()
      this.popular()
    })
  }

  popular(){
    this.categorys?.forEach(element => {

      element.subcategory?.forEach(sub => {

       sub.topics?.forEach(topic => {

         this.topics.concat({subcategoryId: topic.subcategoryId, topicsId: topic.topicsId})
         console.log('popular topics', this.topics)
       })

      });
    });

  }

  getColor(color?: string){
    return this.homeServices.getColor(color);
  }

  actionsConsole(){
    console.log('popular topics', this.topics)
  }

}
