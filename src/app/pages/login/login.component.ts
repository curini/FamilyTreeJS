import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form = new FormGroup({
    login: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  handleSubmit() {
    if (this.form.valid) {
      const login = this.form.value.login!;
      this.authService.login(login);
      this.router.navigate(['/']);
    }
  }
}
