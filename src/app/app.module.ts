import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { BillingWrapperComponent } from './components/billing/wrapper/billing-wrapper.component';
import { StatisticsWrapperComponent } from './components/statistics-wrapper/statistics-wrapper.component';
import { BillingModule } from './modules/billing/billing.module';
import { StatisticsModule } from './modules/statistics/statistics.module';
import { HeaderComponent } from './components/billing/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NotFoundComponent,
    MainContainerComponent,
    BillingWrapperComponent,
    StatisticsWrapperComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BillingModule,
    StatisticsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [MainContainerComponent]
})
export class AppModule { }
