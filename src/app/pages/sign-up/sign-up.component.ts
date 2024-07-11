import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { User } from '../../shared/interfaces/User';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private authService:AuthService, private router: Router) {}


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

    this.authService.register({
      name: this.signup.get('username')!.value,
      email: this.signup.get('email')!.value,
      password: this.signup.get('newPassword')!.value
    }).subscribe(data => {
      console.log("data", data);
      console.log( this.signup.get('email')!.value);

      this.onLogin({email: this.signup.get('email')!.value, password: this.signup.get('newPassword')!.value})
    })

      // this.onLogin({email: this.signup.get('email')!.value, password:this.signup.get('newPassword')!.value})

  }


  onLogin(user: User): void {
    console.log('useru',user);

    this.authService.login(user)
    .subscribe( u => {
        console.log('useru',u);
        this.signup.reset();
        this.router.navigate(['/']);
      });

  }
}
