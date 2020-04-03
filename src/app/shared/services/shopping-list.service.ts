import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Tomato', 5),
        new Ingredient('Ananas', 3),
    ];

    ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

    getIngredients(): Ingredient[] {
        // slice to remove object reference.
        return this.ingredients.slice();
    } 

    addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]): void {
        ingredients.forEach(ingredient => {
            this.ingredients.push(ingredient);    
        });
        this.ingredientsChanged.emit(this.getIngredients());
    }

    removeIngredient(ingredientIndex: number): void {
        this.ingredients.splice(ingredientIndex, 1);
        this.ingredientsChanged.emit(this.getIngredients());
    }

}