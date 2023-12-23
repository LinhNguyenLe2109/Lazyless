import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  submitButtonClicked = false;

  async onSubmit() {
    this.submitButtonClicked = true;
    // Check if passwords match
    this.checkMatchingPasswords();
    // Check if the form is valid
    if (!this.registerForm.invalid) {
      // Get the username and password from the form
      const username = this.registerForm.get('username')?.value;
      const password = this.registerForm.get('password')?.value;
      // If there is a username and password and if they are string, try to register
      if (username && password) {
        try {
          // Register the user
          await this.authService.register(username, password);
        } catch {
          this.submitButtonClicked = false;
        }

        // If the user is registered, authenticate and redirect to home page
        if (this.authService.checkIfRegistered()) {
          this.authService.resetIsRegistered();
          await this.authService.authenticate(username, password);
          this.router.navigate(['/']);
        } else {
          this.submitButtonClicked = false;
        }
      } else {
        this.submitButtonClicked = false;
      }
    } else {
      this.submitButtonClicked = false;
    }
  }

  checkMatchingPasswords() {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      this.registerForm.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      this.registerForm.get('confirmPassword')?.setErrors(null);
    }
  }
}
