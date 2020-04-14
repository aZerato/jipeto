import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { PageForbiddenComponent } from './page-forbidden/page-forbidden.component';
import { RecipesResolverService } from './recipes/services/recipes-resolver.service';

const appRoutes: Routes = [
  { 
    path: '', 
    component: RecipesComponent
  },{ 
    path: 'recipes', 
    component: RecipesComponent,
    children: [
      { 
        path: ':id', 
        component: RecipeDetailComponent,
        resolve: {
          recipe: RecipesResolverService
        }
      }
    ]
  },{ 
    path: 'shopping', 
    component: ShoppingListComponent
  },{ 
    path: 'forbidden', 
    component: PageForbiddenComponent
  },{ 
    path: 'not-found', 
    component: PageNotFoundComponent
  },{ 
    path: '**', 
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }