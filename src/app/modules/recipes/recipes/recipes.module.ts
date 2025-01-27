import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from '../recipes-routing/recipes-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RecipesWrapperComponent } from 'src/app/components/recipes/recipes-wrapper/recipes-wrapper.component';
import { Recipe } from 'src/app/models/Recipe';
import { DataService } from 'src/app/services/data.service';
import { RecipesListComponent } from 'src/app/components/recipes/recipes-list/recipes-list.component';
import { SingleRecipesComponent } from 'src/app/components/recipes/single-recipes/single-recipes.component';



@NgModule({
  declarations: [
    RecipesWrapperComponent,
    RecipesListComponent,
    SingleRecipesComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
  ],
  exports: []
})
export class RecipesModule {
  dataService = inject(DataService)
  constructor() {
    const recipes: Recipe[] = [
      {
        id: 1,
        name: "Creamy Vegan Pasta",
        description: "This creamy vegan pasta is coated in a luscious sauce that's entirely dairy-free! It's a tangy blend of white beans, lemon juice & nutritional yeast.",
        instruction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna ligula, facilisis at dictum in, cursus non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque, mi in porta tincidunt, tellus nunc posuere nisi, eget facilisis justo justo id urna. Fusce magna dolor, ullamcorper sed sapien in, rhoncus aliquam odio. Sed vulputate aliquet erat, vitae blandit lacus sagittis interdum. Nulla facilisi. Suspendisse eu nunc a dui vestibulum gravida at eget nunc. Morbi tellus nulla, accumsan eget hendrerit sed, tempus ac massa.",
        image_url: "https://cdn.loveandlemons.com/wp-content/uploads/2017/10/vegan-pasta.jpg",
        video_url: "09q_CT-xVlM?si=zlnunVCAs07kXMns",
        ingredients: [
          "2½ cups small shell pasta",
          "1 tablespoon extra-virgin olive oil",
          "1 small yellow onion, chopped",
          "5 cups broccoli florets, chopped stems, and leaves (keep stems separate)",
          "¼ cup toasted pine nuts",
          "lemon wedges, for serving"
        ],
        cook_time: 10,
        preparation_time: 20,
        rating: 4.7,
        author: 2,
        serves: 4
      },
      {
        id: 2,
        name: "Spaghetti Aglio e Olio",
        description: "Try this spaghetti aglio e olio recipe once, and you'll make it over and over. It uses simple ingredients, it cooks in 20 minutes, and it's totally delicious.",
        instruction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna ligula, facilisis at dictum in, cursus non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque, mi in porta tincidunt, tellus nunc posuere nisi, eget facilisis justo justo id urna. Fusce magna dolor, ullamcorper sed sapien in, rhoncus aliquam odio. Sed vulputate aliquet erat, vitae blandit lacus sagittis interdum. Nulla facilisi. Suspendisse eu nunc a dui vestibulum gravida at eget nunc. Morbi tellus nulla, accumsan eget hendrerit sed, tempus ac massa.",
        image_url: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/spaghetti-aglio-e-olio-580x847.jpg",
        video_url: "",
        ingredients: [
          "12 ounces spaghetti",
          "½ to 1 cup pasta water",
          "¼ cup extra-virgin olive oil",
          "4 garlic cloves, thinly sliced",
          "¼ to ½ teaspoon red pepper flakes",
          "1 large bunch lacinato kale, stemmed and chopped",
          "½ teaspoon sea salt",
          "Freshly ground black pepper",
          "1 teaspoon fresh lemon juice",
          "1 teaspoon lemon zest",
          "⅓ cup chopped fresh parsley",
          "Parmesan or Vegan Parmesan, for serving"
        ],
        cook_time: 30,
        preparation_time: 20,
        rating: 4.5,
        author: 8,
        serves: 4
      },
    ]
    this.dataService.$recipes.next(recipes)
  }
}
