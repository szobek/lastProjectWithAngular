import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesWrapperComponent } from 'src/app/components/recipes/recipes-wrapper/recipes-wrapper.component';
import { SingleRecipesComponent } from 'src/app/components/recipes/single-recipes/single-recipes.component';


const routes: Routes = [
  {path: 'recipes', component: RecipesWrapperComponent,title:"Recipes List"},
  {path: 'single-recipe/:id', component: SingleRecipesComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],exports:[RouterModule]
})
export class RecipesRoutingModule { }
