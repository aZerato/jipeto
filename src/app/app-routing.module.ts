import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesResolverService } from './recipes/services/recipes-resolver.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { PageForbiddenComponent } from './shared/components/page-forbidden/page-forbidden.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: RecipesComponent
  },
  { 
    path: 'recipes', 
    component: RecipesComponent,
    children: [
      { 
        path: 'new', 
        component: RecipeEditComponent
      },
      { 
        path: ':id', 
        component: RecipeDetailComponent,
        resolve: {
          recipe: RecipesResolverService
        }
      },
      { 
        path: ':id/edit', 
        component: RecipeEditComponent,
        resolve: {
          recipe: RecipesResolverService
        }
      }
    ]
  },
  { 
    path: 'shopping', 
    component: ShoppingListComponent
  },
  { 
    path: 'forbidden', 
    component: PageForbiddenComponent
  },
  { 
     path: 'not-found', 
     component: PageNotFoundComponent
  }
  //,{ 
  //   path: '**', 
  //   redirectTo: 'not-found'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }