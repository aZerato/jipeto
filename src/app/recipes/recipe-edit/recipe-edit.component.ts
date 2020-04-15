import { Component, OnInit } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { RecipesService } from 'src/app/recipes/services/recipes.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
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
    private router: Router,
    private recipesService: RecipesService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGroup();

    this.route.data.subscribe((data: Data) => {
      if (data['recipe'])
      {
        this.recipe = data['recipe'];
        this.createFormGroup();
      }
    });
  }

  createFormGroup() {
    this.recipeForm = this.formBuilder.group({
      recipe: new FormGroup({
        name: new FormControl(this.recipe.name, Validators.required),
        description: new FormControl(this.recipe.description, Validators.required),
        imagePath: new FormControl(this.recipe.imagePath, Validators.required)
      })
    });
  }

  onSubmit(): void {
    if (this.recipeForm.dirty && this.recipeForm.valid)
    {
      // new
      if (this.recipe.id === 0)
      {
        this.recipe.id = this.recipesService.addRecipe(this.recipeForm.value.recipe);
      }
      // update
      else
      {
        this.recipe = Object.assign(this.recipe, this.recipeForm.value.recipe);
        this.recipesService.updateRecipe(this.recipe);
      }

      this.router.navigate(['/recipes', this.recipe.id])
    }
  }

}
