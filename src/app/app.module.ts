import { DataService } from './shared/service/data.service';
import { HomeModule } from './pages/home/home.module';
import { HeaderModule } from './shared/header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './pages/login/login.module';
import { TopicComponent } from './pages/topic/topic.component';
import { CreateTopicComponent } from './pages/topic/create-topic/create-topic.component';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    LoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularEditorModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
