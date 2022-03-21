import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './topic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ReplyFormComponent } from './reply-form/reply-form.component';
import {EditorModule} from 'primeng/editor';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    TopicComponent,
    ReplyFormComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    EditorModule,
    ButtonModule,
  ]
})
export class TopicModule { }
