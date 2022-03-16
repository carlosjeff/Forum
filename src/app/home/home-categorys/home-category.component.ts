import { HomeService } from './../home.service';
import { CategoryModel } from '../../shared/model/category-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class HomecategoryComponent implements OnInit {

  @Input() categorys?: CategoryModel[];

  constructor(private homeServices: HomeService) { }

  ngOnInit(): void {
  }



  getColor(color?: string){
    return this.homeServices.getColor(color);
  }

}
