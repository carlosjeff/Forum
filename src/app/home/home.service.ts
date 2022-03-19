import { DataService } from './../shared/service/data.service';
import { CategoryModel } from 'src/app/shared/model/category-model';
import { TopicModel } from './../shared/model/topic-model';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements OnDestroy {

  private $topics = new BehaviorSubject<TopicModel[]>([]);
  private $category = new BehaviorSubject<CategoryModel[]>([]);

  constructor(private ds: DataService) {
    this.topicsInit();
    this.categoryInit();
  }

  ngOnDestroy(): void {
    this.$topics.unsubscribe();
    this.$category.unsubscribe();
  }

  topicsInit(){
    this.ds.getAll<TopicModel[]>('topics').subscribe(data => this.$topics.next(data));
  }

  get getTopics(): Observable<TopicModel[]>{
    return this.$topics.asObservable()
  }

  categoryInit(){
    this.ds.getAll<CategoryModel[]>('categorys').subscribe(data => this.$category.next(data))
  }

  get getCategorys(): Observable<CategoryModel[]>{
    return this.$category.asObservable()
  }

  getColor(color?: string){

    const nameColor = color?.length == 0 ? 'blue' : color
     return `var(--${nameColor}-500)`
   }

  getNumberTopycsCategorys(value: TopicModel[],categoryId: number){

    const topicArrey: TopicModel[] = value.filter(t =>  {
      return !t.subcategorys?.findIndex(s => s.subcategory?.categoryId == categoryId)
    })

    return topicArrey.length
  }

}
