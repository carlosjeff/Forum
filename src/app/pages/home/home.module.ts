import { DataService } from './../../shared/service/data.service';
import { HomeService } from './home.service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomecategoryComponent } from './home-categorys/home-category.component';
import { HomeTopicsComponent } from './home-topics/home-topics.component';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChipModule } from 'src/app/shared/components/chip/chip.module';
import { DropdownModule } from 'src/app/shared/components/dropdown/dropdown.module';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)


@NgModule({
  declarations: [HomeComponent, HomecategoryComponent, HomeTopicsComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ScrollingModule,
    ChipModule,
    DropdownModule
  ],
  exports: [HomeComponent],
  providers: [
    HomeService,
    { provide: LOCALE_ID, useValue: "pt"}
  ]
})
export class HomeModule { }
