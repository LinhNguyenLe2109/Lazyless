import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  submitButtonClicked = false;
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    this.submitButtonClicked = true;
    this.errorMessage = '';
    // Check if the form is valid
    if (!this.loginForm.invalid) {
      // Get the username and password from the form
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      // If there is a username and password and if they are string, try to authenticate
      if (username && password) {
        // Authenticate the user
        try {
          await this.authService.authenticate(username, password);
        } catch (err) {
          this.submitButtonClicked = false;
        }
        // If the user is logged in, redirect to home page
        if (this.authService.isLoggedIn()) {
          this.router.navigate(['/']);
        } else {
          // Set the submit button to false
          this.submitButtonClicked = false;
          this.errorMessage = 'Invalid username or password';
        }
      } else {
        // Set the submit button to false
        this.submitButtonClicked = false;
        this.errorMessage = 'Please enter a username and password';
      }
    } else {
      // Set the submit button to false
      this.submitButtonClicked = false;
    }
  }
}
