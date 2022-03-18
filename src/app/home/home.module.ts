import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomecategoryComponent } from './home-categorys/home-category.component';
import { HomeTopicsComponent } from './home-topics/home-topics.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';


@NgModule({
  declarations: [HomeComponent, HomecategoryComponent, HomeTopicsComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    ScrollingModule,
    ButtonModule,
    PaginatorModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
