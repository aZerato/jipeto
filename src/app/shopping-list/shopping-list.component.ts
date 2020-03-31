import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Tomato", 5),
    new Ingredient("Potatoes", 3),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientSubmitted(ingredientEvent: Ingredient)
  {
    this.ingredients.push(ingredientEvent);
  }
}
