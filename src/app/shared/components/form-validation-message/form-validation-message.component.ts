import { Component, Input, OnInit } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { FormValidationService } from '../../services/form-validation.service';

@Component({
  selector: 'app-form-validation-message',
  template: `<div [ngStyle]="{'display': errorMessage !== null ? 'block' : 'hidden' }" 
                class="invalid-feedback">
                {{ errorMessage }}
              </div>`
})
export class FormValidationMessageComponent implements OnInit {
  @Input() 
  ctrl: FormControl;

  @Input()
  ctrlName: string;

  _input: Node;
  _ctrlToValidate: AbstractControl;

  constructor() {  }

  ngOnInit() {
    this._ctrlToValidate = this.ctrl.get(this.ctrlName);
  }

  get errorMessage() 
  {
    for (let errorType in this._ctrlToValidate.errors) 
    {
      if (
        this._ctrlToValidate.errors.hasOwnProperty(errorType) &&
        this._ctrlToValidate.touched
      ) 
      {
        return FormValidationService.getValidatorErrorMessage(errorType);
      }
    }

    return null;
  }
}
