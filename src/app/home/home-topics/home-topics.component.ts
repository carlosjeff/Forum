import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-topics',
  templateUrl: './home-topics.component.html',
  styleUrls: ['./home-topics.component.scss']
})
export class HomeTopicsComponent implements OnInit {

  constructor(private homeServices: HomeService) { }

  ngOnInit(): void {
  }

  getColor(color?: string){
    return this.homeServices.getColor(color);
  }

}
