import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.ingredientsChangedSubject.subscribe(
      (ingredients: Ingredient[]) => 
        this.ingredients = ingredients);
  }

  onUpdate(ingredientIndex: number): void {
    this.shoppingListService.updateIngredientSubject.next(ingredientIndex);
  }

  onDelete(ingredientIndex: number): void {
    this.shoppingListService.removeIngredient(ingredientIndex);
  }
}
