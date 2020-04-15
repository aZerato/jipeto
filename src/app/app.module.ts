import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { CollapseDirective } from './shared/directives/collapse.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { PageForbiddenComponent } from './page-forbidden/page-forbidden.component';
import { RecipesResolverService } from './recipes/services/recipes-resolver.service';
import { RecipesService } from './recipes/services/recipes.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FormValidationMessageComponent } from './form-validation-message/form-validation-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    ShoppingListComponent,
    ShoppingEditComponent,

    FormValidationMessageComponent,
    PageNotFoundComponent,
    PageForbiddenComponent,
    
    DropdownDirective,
    CollapseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    RecipesService,
    RecipesResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
