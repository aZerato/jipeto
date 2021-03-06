import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from '../../shared/services/shopping-list.service';

@Injectable()
export class RecipesService {
    private recipes: Recipe[] = [
        new Recipe(
            1,
            "A test recipe", 
            "This is simply a test", 
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg",
            [
                new Ingredient('Potatoes', 5),
                new Ingredient('Fish', 1),
            ]),
        new Recipe(
            2,
            "Another recipe", 
            "This is simply an another test", 
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg",
            [
                new Ingredient('Cucumber', 3),
                new Ingredient('Salade', 1),
                new Ingredient('Chili', 2),
            ]),
        new Recipe(
            3,
            "Chili con carne",
            "The most amazing recipe of Chili con carne",
            "https://pinchofyum.com/wp-content/uploads/Sunday-Chili-Square.jpg",
            [
                new Ingredient('Jalapenos', 1),
                new Ingredient('Beef', 1),
                new Ingredient('Chili', 1),
            ])
      ];

    recipesUpdated: Subject<Recipe[]> = new Subject<Recipe[]>()
    
    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes(): Recipe[] 
    {
        // slice to remove direct reference.
        return this.recipes.slice();
    }

    getRecipeById(id: number): Recipe 
    {
        return this.recipes.find((recipe) => recipe.id == id);
    }

    addIngredientsToShoppingList(ingredients: Ingredient[])
    {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(newRecipe: Recipe) : number 
    {
        const maxRecipeId = Math.max.apply(Math, this.recipes.map((recipe) => 
            { return recipe.id; }));
        
        newRecipe.id = maxRecipeId + 1;
        
        this.recipes.push(newRecipe);

        this.recipesUpdated.next(this.getRecipes());

        return newRecipe.id;
    }

    updateRecipe(updateRecipe: Recipe) : void 
    {
        const recipeIndex = this.recipes.findIndex((recipe) => {
            return recipe.id === updateRecipe.id;
        });

        this.recipes.splice(recipeIndex, 1);
        
        this.recipes.push(updateRecipe);

        this.recipesUpdated.next(this.getRecipes());
    }

    removeRecipe(recipeId: number) : void 
    {
        const recipeIndex = this.recipes.findIndex((recipe) => {
            return recipe.id === recipeId;
        });

        this.recipes.splice(recipeIndex, 1);

        this.recipesUpdated.next(this.getRecipes());
    }
}