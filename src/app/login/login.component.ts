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
  constructor(private authService: AuthService, private router: Router) {}
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  submitButtonClicked = false;

  async onSubmit() {
    this.submitButtonClicked = true;
    // Check if the form is valid
    if (!this.loginForm.invalid) {
      // Get the username and password from the form
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      // If there is a username and password and if they are string, try to authenticate
      if (username && password) {
        console.log('valid form');
        // Set the submit button to false
        this.submitButtonClicked = false;
        // Authenticate the user
        await this.authService.authenticate(username, password);
        // If the user is logged in, redirect to home page
        if (this.authService.isLoggedIn()) {
          console.log('logged in');
          this.router.navigate(['/']);
        } else {
          console.log('not logged in');
        }
      }
    } else {
      console.log('invalid form');
      console.log(this.loginForm.get('username')?.getError('required'));
      console.log(this.loginForm.get('username')?.errors?.['required']);
    }
  }
}
