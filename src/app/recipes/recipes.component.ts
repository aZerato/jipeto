import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { RecipesService } from './services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  recipeSelected: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.recipeSelected
      .subscribe((recipe: Recipe) => this.recipeSelected = recipe);
  }
}
