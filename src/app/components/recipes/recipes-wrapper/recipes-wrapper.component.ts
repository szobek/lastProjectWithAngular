import { Component, inject } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-recipes-wrapper',
  templateUrl: './recipes-wrapper.component.html',
  styleUrls: ['./recipes-wrapper.component.scss']
})
export class RecipesWrapperComponent {
  recipes: Recipe[] = []
  dataService = inject(DataService)
  constructor() {
    this.dataService.$recipes.subscribe((recipesData: Recipe[] | null) => {
      if (recipesData) this.recipes = recipesData
    })
  }
}
