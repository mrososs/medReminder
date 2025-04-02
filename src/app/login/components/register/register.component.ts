import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: false,
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  fb = inject(FormBuilder);
  errorMessage = signal('');
  passwordVisible = false; // Toggle password visibility
  showPasswordToggle = false; // Track if the user has typed in password field
  showConfirmPasswordToggle = false; // Track if user has typed in confirmPassword field

  constructor(private router: Router) {
    this.registerForm = this.fb.group(
      {
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required]],
      },
      { validators: this.matchPasswords } // Fix: Use 'validators' instead of 'validator'
    );

    merge(
      ...Object.keys(this.registerForm.controls).map((field) =>
        merge(
          this.registerForm.get(field)!.statusChanges,
          this.registerForm.get(field)!.valueChanges
        )
      )
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
    // Listen for changes in password field
    this.registerForm.get('password')?.valueChanges.subscribe((value) => {
      this.showPasswordToggle = value.length > 0;
    });

    // Listen for changes in confirmPassword field
    this.registerForm
      .get('confirmPassword')
      ?.valueChanges.subscribe((value) => {
        this.showConfirmPasswordToggle = value.length > 0;
      });
  }

  ngOnInit() {}

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  updateErrorMessage() {
    for (const field in this.registerForm.controls) {
      if (this.registerForm.get(field)?.errors) {
        this.errorMessage.set(this.getErrorMessage(field));
        return;
      }
    }
    this.errorMessage.set('');
  }

  getErrorMessage(field: string): string {
    const control = this.registerForm.get(field);
    if (!control) return '';

    if (control.hasError('required'))
      return `You must enter a value for ${field}`;
    if (control.hasError('email')) return 'Not a valid email';
    if (control.hasError('minlength'))
      return `Password must be at least ${control.errors?.['minlength'].requiredLength} characters`;

    // Check for mismatch error at the form level
    if (this.registerForm.hasError('mismatch')) return 'Passwords do not match';

    return '';
  }

  matchPasswords(control: AbstractControl) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) return null;

    return password.value === confirmPassword.value ? null : { mismatch: true };
  }

  register() {
    if (this.registerForm.valid) {
      console.log('User registered successfully:', this.registerForm.value);
      this.router.navigate(['/login/login']);
    } else {
      this.updateErrorMessage();
    }
  }
}
