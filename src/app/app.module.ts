import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { BillingWrapperComponent } from './components/billing/wrapper/billing-wrapper.component';
import { StatisticsWrapperComponent } from './components/statistics/wrapper/statistics-wrapper.component';
import { BillingModule } from './modules/billing/billing.module';
import { StatisticsModule } from './modules/statistics/statistics.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BalanceExchangeContentComponent } from './components/billing/modal/balance-exchange-content/balance-exchange-content.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PostsModule } from './modules/posts/posts/posts.module';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { SinglePostComponent } from './components/posts/single-post/single-post.component';

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    NotFoundComponent,
    MainContainerComponent,
    BillingWrapperComponent,
    StatisticsWrapperComponent,
    BalanceExchangeContentComponent,
    PostListComponent,
    SinglePostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BillingModule,
    StatisticsModule,
    PostsModule,
    AppRoutingModule,
    NgbModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [MainContainerComponent]
})
export class AppModule { }
