import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Recipe } from '../models/recipe.model';
import { RecipesService } from 'src/app/recipes/services/recipes.service';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipe: Recipe = new Recipe(0, '', '', '', []);
  recipeForm: FormGroup;
  dataSubscription: Subscription;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipesService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGroup();

    this.dataSubscription = this.route.data.subscribe((data: Data) => {
      if (data['recipe'])
      {
        this.recipe = data['recipe'];
        this.createFormGroup();
      }
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  createFormGroup() {
    this.recipeForm = this.formBuilder.group({
      recipe: new FormGroup({
        name: new FormControl(this.recipe.name, Validators.required),
        description: new FormControl(this.recipe.description, Validators.required),
        imagePath: new FormControl(this.recipe.imagePath, Validators.required)
      }),
      ingredient: new FormGroup({
        name: new FormControl('', Validators.required),
        amount: new FormControl('', [ 
          Validators.required, 
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    });
  }

  addIngredient(): void 
  {
    if(this.recipeForm.get('ingredient').valid)
    {
      this.recipe.ingredients.push(new Ingredient(
        this.recipeForm.value.ingredient.name, 
        this.recipeForm.value.ingredient.amount));
    }
  }

  onDeleteIngedient(ingredientIndex: number): void
  {
    this.recipe.ingredients.splice(ingredientIndex, 1);
  }

  onSubmit(): void 
  {
    if (this.recipeForm.dirty && this.recipeForm.get('recipe').valid)
    {
      this.recipe = Object.assign(this.recipe, this.recipeForm.value.recipe);
      // new
      if (this.recipe.id === 0)
      {
        this.recipe.id = this.recipesService.addRecipe(this.recipe);
      }
      // update
      else
      {
        this.recipesService.updateRecipe(this.recipe);
      }

      this.router.navigate(['/recipes', this.recipe.id]);
    }
  }

  onCancel() {
    if (this.recipe.id !== 0)
      this.router.navigate(['/recipes', this.recipe.id]);
    else 
      this.router.navigate(['/recipes']);
  }
}
