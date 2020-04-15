import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from 'src/app/recipes/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();

    this.recipesService.recipesUpdated.subscribe((updated: boolean) => {
      if (updated)
      {
        this.recipes = this.recipesService.getRecipes();
      }
    });
  }
}
