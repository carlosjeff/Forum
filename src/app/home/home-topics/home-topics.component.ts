import { TopicModel } from './../../shared/model/topic-model';
import { Component, Input, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/shared/model/category-model';
import { HomeService } from '../home.service';

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

}
