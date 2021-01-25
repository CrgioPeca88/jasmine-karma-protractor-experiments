// Dependencies
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'error-input',
  templateUrl: './error-input.component.html',
  styleUrls: ['./error-input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorInputComponent {
  @Input() errors: ValidationErrors;
  @Input() inputLabel: string;

  constructor() {}

  ngOnInit() {
			this.validateInputDecoParams();
		}

		paramValidate(key: string): void {
			if(!this[key]){
				console.error(`Parametro '${key}' es obligatorio`);
			}
		}

		validateInputDecoParams(): void {
			this.paramValidate('inputLabel');
		}

		showErrors(validatorName: string): boolean {
		 return (
				(this.errors && this.errors[validatorName]) ? true : false
			);
		}

		getRequiredLengthInput(lengthKey: string): number {
			return(
				(this.errors[lengthKey]) ?
				this.errors[lengthKey].requiredLength :
				console.error("[CS][Error Controlado en el componente error-input] --> 1")
			);
		}

}
