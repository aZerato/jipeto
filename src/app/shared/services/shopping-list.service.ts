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

    ingredientsChangedSubject: Subject<Ingredient[]> = new Subject<Ingredient[]>();
    updateIngredientSubject: Subject<number> = new Subject<number>();

    getIngredients(): Ingredient[] {
        // slice to remove object reference.
        return this.ingredients.slice();
    } 

    addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChangedSubject.next(this.getIngredients());
    }

    getIngredientByIndex(ingredientIndex: number): Ingredient {
        const ingredient = this.ingredients[ingredientIndex];
        
        return ingredient;
    }

    updateIngredient(ingredientIndex: number, newIngredient: Ingredient): void {
        this.ingredients[ingredientIndex] = newIngredient;
        this.ingredientsChangedSubject.next(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]): void {
        this.ingredients.push(...ingredients);    
        this.ingredientsChangedSubject.next(this.getIngredients());
    }

    removeIngredient(ingredientIndex: number): void {
        this.ingredients.splice(ingredientIndex, 1);
        this.ingredientsChangedSubject.next(this.getIngredients());
    }
}