import { TopicModule } from './topic/topic.module';
import { TopicModel } from './shared/model/topic-model';
import { DataService } from './shared/service/data.service';
import { HomeModule } from './home/home.module';
import { HeaderModule } from './shared/header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    HttpClientModule,
    TopicModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
