import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,title:"Home"},
  {path: 'statistics',loadChildren: () => import('./modules/statistics/statistics.module').then(m => m.StatisticsModule) },
  {path: 'coffees', loadChildren: () => import('./modules/coffee/coffee/coffee.module').then(m => m.CoffeeModule)},
  {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)},
  {path: 'billing', loadChildren: () => import('./modules/billing/billing.module').then(m => m.BillingModule)},
  {path: 'todos', loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule)},
  {path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)},
  {path: 'tasks', loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule)},
  {path: 'dragdrop', loadChildren: () => import('./modules/dragDrop/drag-drop.module').then(m => m.myDragDropModule)},
  {path: 'auth', loadChildren: () => import('./modules/myauthentication/myauthentication.module').then(m => m.MyauthenticationModule)},
  {path: 'movies', loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule)},
  {path: 'recipes', loadChildren: () => import('./modules/recipes/recipes.module').then(m => m.RecipesModule)},
  {path: 'coffeeMachine', loadChildren: () => import('./modules/coffeeMachine/coffee-machine.module').then(m => m.CoffeeMachineModule)},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path: '**', component: NotFoundComponent,pathMatch: 'full',title:"Not found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
