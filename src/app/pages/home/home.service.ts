import { Metadata } from './../../shared/model/metadata';
import { OptionsPage } from './../../shared/model/options-page';
import { PaginationTopics } from './../../shared/model/pagination-topics';
import { DataService } from './../../shared/service/data.service';
import { CategoryModel } from 'src/app/shared/model/category-model';
import { TopicModel } from './../../shared/model/topic-model';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements OnDestroy {

  private $topics = new BehaviorSubject<TopicModel[]>([]);
  private $category = new BehaviorSubject<CategoryModel[]>([]);

  constructor(private ds: DataService) {

    this.categoryInit();

  }

  ngOnDestroy(): void {
    this.$topics.unsubscribe();
    this.$category.unsubscribe();
  }

  get getTopics(): Observable<TopicModel[]>{
    return this.$topics.asObservable()
  }

  get getCategorys(): Observable<CategoryModel[]>{
    return this.$category.asObservable()
  }

  categoryInit(){
    this.ds.getAll<CategoryModel[]>('categorys').subscribe(data => this.$category.next(data))
  }

  getColor(color?: string){
     return `var(--${color ? color : 'blue' }-500)`
   }
}
