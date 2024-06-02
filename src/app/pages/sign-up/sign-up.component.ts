import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export default class SignUpComponent {

  public signup: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    newPassword: ['', [Validators.required, Validators.minLength(8)]],
    confirmPass: ['', [Validators.required]],
  },
  {
    validators:[
        this.paswordEqual('newPassword','confirmPass')
    ]
  });

  constructor(private fb: FormBuilder) {}


  paswordEqual(field1:string, field2:string){
    return ( formGroup: AbstractControl): ValidationErrors | null =>{
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;
        if (fieldValue1 !== fieldValue2) {
          formGroup.get(field2)?.setErrors( {notEqual: true})
          return {notEqual: true}
        }
        formGroup.get(field2)?.setErrors( null)
        return null;
    }
  }


  isValidField(field: string): boolean | null {
    return  this.signup.controls[field].errors && this.signup.controls[field].touched;
  }
  getFieldError(field: string): string | null {
    if (!this.signup.controls[field]) return null;
    const errors = this.signup.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`;
        case 'pattern':
          return `Ingrese un correo Valido`;
        case 'notEqual':
          return 'Las constraseñas deben ser iguales'
      }
    }
    return null;
  }

  onSave(): void {
    if (this.signup.invalid) {
      this.signup.markAllAsTouched();
      return;
    }
    console.log(this.signup.value);

    this.signup.reset();
  }
}
