import { OptionsPage } from './../../../shared/model/options-page';
import { Metadata } from './../../../shared/model/metadata';
import { TopicModel } from './../../../shared/model/topic-model';
import { Component, Input, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/shared/model/category-model';
import { HomeService } from '../home.service';
import { TopicSubcategoryModel } from 'src/app/shared/model/topic-subcategory-model';
import { PagePrime } from 'src/app/shared/model/page-prime';

@Component({
  selector: 'app-home-topics',
  templateUrl: './home-topics.component.html',
  styleUrls: ['./home-topics.component.scss']
})
export class HomeTopicsComponent implements OnInit {

  categorys: CategoryModel[] = [];
  topics: TopicModel[] = [];
  metadata: Metadata = {};
  optionsPage = new OptionsPage();
  filter: string = "";


  //categorysFilter: CategoryModel[] = []

  categorySelect!: CategoryModel

  constructor(private homeServices: HomeService) { }

  ngOnInit(): void {
    this.homeServices.getTopics.subscribe(data => this.topics = data.slice());
    this.homeServices.getCategorys.subscribe(data => this.categorys = data.slice())
    this.homeServices.getMetadata.subscribe(data => this.metadata = data)
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

  onPageChange(event: PagePrime){
    this.optionsPage.page = event.page + 1;

    this.homeServices.topicsPagination(this.optionsPage);
  }

  filterChange(){
    if(this.filter.length > 1){
      this.optionsPage.filter = this.filter;
    }else{
      this.optionsPage.filter = ""
    }
    this.homeServices.topicsPagination(this.optionsPage);
  }

  categoryChange(){
    console.log('foi')
    this.optionsPage.categoryId = this.categorySelect ? this.categorySelect.id! : 0
    this.homeServices.topicsPagination(this.optionsPage);
  }

}
