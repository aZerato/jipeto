import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

import { RecipesResolverService } from './recipes/services/recipes-resolver.service';
import { RecipesService } from './recipes/services/recipes.service';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeNoSelectedComponent } from './recipes/recipe-no-selected/recipe-no-selected.component';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { PageForbiddenComponent } from './shared/components/page-forbidden/page-forbidden.component';
import { FormValidationMessageComponent } from './shared/components/form-validation-message/form-validation-message.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeNoSelectedComponent,
    
    ShoppingListComponent,
    ShoppingEditComponent,

    FormValidationMessageComponent,
    PageNotFoundComponent,
    PageForbiddenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    RecipesService,
    RecipesResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
