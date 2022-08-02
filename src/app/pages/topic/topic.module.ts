import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { TopicComponent } from './topic.component';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [TopicComponent, CreateTopicComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
  ]
})
export class TopicModule {
}
