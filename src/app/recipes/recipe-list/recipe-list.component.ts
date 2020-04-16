import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from 'src/app/recipes/services/recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  recipesUpdatedSubscription: Subscription;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();

    this.recipesUpdatedSubscription = this.recipesService.recipesUpdated.subscribe((recipes: Recipes[]) => {
        this.recipes = recipes;
    });
  }

  ngOnDestroy(): void {
    this.recipesUpdatedSubscription.unsubscribe();
  }
}
