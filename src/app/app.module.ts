import { inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';
import { CallService } from './services/call.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    NotFoundComponent,
    MainContainerComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
],
  providers: [],
  bootstrap: [MainContainerComponent]
})
export class AppModule {
  callService=inject(CallService)
  constructor(){
    this.callService.getAllDataFromDB()
  }
 }
