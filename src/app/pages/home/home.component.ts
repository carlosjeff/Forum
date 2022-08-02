import { OptionsPage } from './../../shared/model/options-page';
import { DataService } from './../../shared/service/data.service';
import { TopicModel } from './../../shared/model/topic-model';
import { CategoryModel } from './../../shared/model/category-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }

}
