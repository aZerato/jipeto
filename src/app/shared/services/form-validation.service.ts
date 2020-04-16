import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FormValidationService {
    static errorMessages = {
        required: 'Required',
        pattern: 'Is invalid format',
      };

    static getValidatorErrorMessage(validatorName: string) {
        return this.errorMessages[validatorName];
      }
}