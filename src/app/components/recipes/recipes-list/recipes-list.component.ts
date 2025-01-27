import { Component, inject } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'recipes-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
recipes: Recipe[] = []
  dataService = inject(DataService)
  constructor() {
    this.dataService.$recipes.subscribe((recipesData: Recipe[] | null) => {
      if (recipesData) this.recipes = recipesData
    })
  }
}
