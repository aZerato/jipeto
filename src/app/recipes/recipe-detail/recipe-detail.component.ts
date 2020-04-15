import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from 'src/app/recipes/services/recipes.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  deleteModalConfirmation: NgbModalRef;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.recipe = data['recipe'];
    });
  }

  addToShoppingList(): void
  {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  openDeleteModalConfirmation(modalContent): void
  {
    this.deleteModalConfirmation = this.modalService.open(modalContent);
  }

  onCloseDeleteModalConfirmation(): void
  {
    this.recipesService.removeRecipe(this.recipe.id);

    this.deleteModalConfirmation.close();

    this.router.navigate(['/recipes']);
  }
}
