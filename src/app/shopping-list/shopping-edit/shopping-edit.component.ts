import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit {

  @Output()
  ingredientSubmitedEvent: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  @ViewChild('nameInput')
  nameInputRef: ElementRef;

  @ViewChild('amountInput')
  amountInputRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.ingredientSubmitedEvent.emit(
      new Ingredient(
        this.nameInputRef.nativeElement.value, 
        this.amountInputRef.nativeElement.value));
  }
}
