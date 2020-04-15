import { Component, OnInit } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { RecipesService } from 'src/app/recipes/services/recipes.service';
import { ActivatedRoute, Data } from '@angular/router';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe = new Recipe(0, '', '', '', []);

  recipeForm: FormGroup;
  
  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      recipe: new FormGroup({
        name: new FormControl(this.recipe.name, Validators.required),
        description: new FormControl(this.recipe.description, Validators.required),
        imagePath: new FormControl(this.recipe.imagePath, Validators.required)
      })
    });

    this.route.data.subscribe((data: Data) => {
      this.recipe = data['recipe'];
    });
  }

  onSubmit() {
    if (this.recipeForm.dirty && this.recipeForm.valid)
    {
      // new
      if (!this.recipe)
      {
        this.recipesService.addRecipe(this.recipe);
      }
      // update
    }
  }

}
