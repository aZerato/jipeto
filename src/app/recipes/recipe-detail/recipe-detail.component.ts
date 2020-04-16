import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from 'src/app/recipes/services/recipes.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  deleteModalConfirmation: NgbModalRef;
  dataSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.dataSubscription = this.route.data.subscribe((data: Data) => {
      this.recipe = data['recipe'];
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
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
