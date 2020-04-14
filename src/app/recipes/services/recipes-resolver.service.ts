import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs';
import { RecipesService } from './recipes.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipesResolverService implements Resolve<Recipe> {

    constructor(private recipesService: RecipesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        Recipe | Observable<Recipe> | Promise<Recipe> 
    {
        return this.recipesService.getRecipeById(Number(route.params['id']));
    }

}