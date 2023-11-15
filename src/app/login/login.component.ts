import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  onSubmit() {
    this.submitButtonClicked = true;
    if (this.loginForm.invalid) {
      console.log('invalid form');
      console.log(this.loginForm.get('username')?.getError('required'));
      console.log(this.loginForm.get('username')?.errors?.['required']);
    } else {
      console.log(this.loginForm.value);
      console.log(this.loginForm.get('username')?.getError('required'));
      console.log(this.loginForm.get('username')?.errors?.['required']);
    }
  }
}
