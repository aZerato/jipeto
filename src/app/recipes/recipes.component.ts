import { Component, OnInit } from '@angular/core';
import { RecipesService } from './services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipesService]
})
export class RecipesComponent {
  constructor() { }
}
