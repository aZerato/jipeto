import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from 'src/app/recipes/services/recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [RecipesService]
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipe: Recipe;
  
  constructor(private route: ActivatedRoute,
    private recipesService: RecipesService) { }

  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
        this.recipe = this.recipesService.getRecipeById(params['id']);
      });
  }

  addToShoppingList()
  {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
