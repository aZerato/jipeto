import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from 'src/app/recipes/services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipe: Recipe;
  
  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  addToShoppingList()
  {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
