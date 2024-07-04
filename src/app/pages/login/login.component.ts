import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../shared/interfaces/User';

@Component({
  selector: 'pages-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export default class LoginComponent {


  public login: FormGroup = this.fb.group({
    email: ['pp@ppp.com', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['74352215pqe', [Validators.required, Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder, private authService:AuthService, private router: Router){}

  onLogin(user: User): void {
    console.log('useru',user);

    this.authService.login(user)
    .subscribe( u => {
        console.log('useru',u);
        this.router.navigate(['/']);
      });

  }

}
