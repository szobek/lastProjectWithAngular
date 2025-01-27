import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/Recipe';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-single-recipes',
  templateUrl: './single-recipes.component.html',
  styleUrls: ['./single-recipes.component.scss']
})
export class SingleRecipesComponent {
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)
  sanitizer = inject(DomSanitizer)
  private dataService = inject(DataService)
  id!: number
  recipes: Recipe[] = []
  singleRecipe!: Recipe
  singleRecipeAuthor: User | null = null
  safeRecipeVideoSource!: SafeResourceUrl

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.id = Number(params["params"]["id"])
      this.dataService.$recipes.subscribe({
        next: (recipesData: Recipe[] | null) => {
          if (recipesData) {
            this.recipes = recipesData
            this.singleRecipe = this.recipes.filter((recipe: Recipe) => recipe.id === this.id)[0]
            document.title=this.singleRecipe.name
            this.safeRecipeVideoSource = this.getSafeUrl(this.singleRecipe.video_url)
            this.dataService.$users.subscribe((users: User[] | null) => {
              if (users) this.singleRecipeAuthor = users.filter((user: User) => user.id === this.singleRecipe.id)[0]
            })
          }
        }
      })
    });
  }
  getSafeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }
}
