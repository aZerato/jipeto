import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../models/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Tomato', 5),
        new Ingredient('Ananas', 3),
    ];

    ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();

    getIngredients(): Ingredient[] {
        // slice to remove object reference.
        return this.ingredients.slice();
    } 

    addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]): void {
        this.ingredients.push(...ingredients);    
        this.ingredientsChanged.next(this.getIngredients());
    }

    removeIngredient(ingredientIndex: number): void {
        this.ingredients.splice(ingredientIndex, 1);
        this.ingredientsChanged.next(this.getIngredients());
    }
}