import { Component, Input, Renderer2, OnInit } from '@angular/core';
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

  constructor(private _renderer2: Renderer2) {  }

  ngOnInit() {
    this._ctrlToValidate = this.ctrl.get(this.ctrlName);
    this._input = document.getElementsByName(this.ctrlName)[0];
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
        this._renderer2.addClass(this._input, 'invalid');

        return FormValidationService.getValidatorErrorMessage(errorType);
      }
    }
  
    this._renderer2.removeClass(this._input, 'invalid');

    return null;
  }
}
