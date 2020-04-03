import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    private recipes: Recipe[] = [
        new Recipe("A test recipe", "This is simply a test", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg"),
        new Recipe("Another recipe", "This is simply an another test", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg")
      ];

    getRecipes(): Recipe[] {
        // slice to remove direct reference.
        return this.recipes.slice();
    }
}