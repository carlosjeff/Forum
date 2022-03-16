import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomecategoryComponent } from './home-categorys/home-category.component';
import { HomeTopicsComponent } from './home-topics/home-topics.component';



@NgModule({
  declarations: [HomeComponent, HomecategoryComponent, HomeTopicsComponent],
  imports: [
    CommonModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
