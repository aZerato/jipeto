import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit , OnDestroy 
{  
  @ViewChild('f')
  form: NgForm;

  updateMode: boolean = false;
  updateIngredientSubscription: Subscription;
  ingredientEdited: Ingredient;
  ingredientEditedIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void 
  {
    this.updateIngredientSubscription = 
      this.shoppingListService.updateIngredientSubject
        .subscribe((ingredientIndex: number) => {
          this.ingredientEditedIndex = ingredientIndex;
          this.ingredientEdited = this.shoppingListService.getIngredientByIndex(ingredientIndex);
          this.updateMode = true;
          this.form.setValue({
            name: this.ingredientEdited.name,
            amount: this.ingredientEdited.amount});
        });
  }

  ngOnDestroy(): void {
    this.updateIngredientSubscription.unsubscribe();
  }

  onSubmit() : void 
  {
    const value = this.form.value;
    const ingredient = new Ingredient(
      value.name, 
      value.amount);

    if (this.updateMode)
    {
      this.shoppingListService.updateIngredient(this.ingredientEditedIndex, ingredient);
      this.updateMode = false;
    }
    else 
    {
      this.shoppingListService.addIngredient(ingredient);
    }

    this.form.reset();
  }

  onReset(): void {
    this.updateMode = false;
    this.form.reset();
  }
}
