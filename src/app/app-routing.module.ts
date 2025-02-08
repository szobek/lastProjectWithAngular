import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,title:"Home"},
  {path: 'coffees', loadChildren: () => import('./modules/coffee/coffee/coffee.module').then(m => m.CoffeeModule)},
  {path: 'billing', loadChildren: () => import('./modules/billing/billing.module').then(m => m.BillingModule)},
  {path: 'todos', loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule)},
  {path: '**', component: NotFoundComponent,pathMatch: 'full',title:"Not found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
