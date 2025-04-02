import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage = signal('');
  passwordVisible = false; // For toggling password visibility
  fb = inject(FormBuilder);

  constructor(private _route:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Merge both email and password field status and value changes
    merge(
      this.loginForm.get('email')!.statusChanges,
      this.loginForm.get('email')!.valueChanges,
      this.loginForm.get('password')!.statusChanges,
      this.loginForm.get('password')!.valueChanges
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  ngOnInit() {}

  updateErrorMessage() {
    // For email error messages
    if (this.loginForm.get('email')!.hasError('required')) {
      this.errorMessage.set('You must enter a value for email');
    } else if (this.loginForm.get('email')!.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    }
    // For password error messages
    else if (this.loginForm.get('password')!.hasError('required')) {
      this.errorMessage.set('You must enter a value for password');
    } else if (this.loginForm.get('password')!.hasError('minlength')) {
      this.errorMessage.set('Password must be at least 6 characters');
    } else {
      this.errorMessage.set('');
    }
  }

  // Get the specific error message for email
  getEmailErrorMessage() {
    const emailControl = this.loginForm.get('email');
    if (emailControl?.hasError('required')) {
      return 'You must enter a value';
    }
    if (emailControl?.hasError('email')) {
      return 'Not a valid email';
    }
    return '';
  }

  // Get the specific error message for password
  getPasswordErrorMessage() {
    const passwordControl = this.loginForm.get('password');
    if (passwordControl?.hasError('required')) {
      return 'You must enter a value for password';
    }
    if (passwordControl?.hasError('minlength')) {
      return 'Password must be at least 6 characters';
    }
    return '';
  }

  // Toggle the password visibility
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  login() {
    // Your login logic here
    if (this.loginForm.invalid) {
      this.updateErrorMessage();
    } else{
      this._route.navigate(['/home'])
    }
    
  }
}
