import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isRegistered = false;
  constructor(private http: HttpClient) {}

  setToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  getToken() {
    try {
      return localStorage.getItem('access_token');
    } catch (err) {
      return null;
    }
  }

  removeToken() {
    localStorage.removeItem('access_token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  checkIfRegistered() {
    return this.isRegistered;
  }

  resetIsRegistered() {
    this.isRegistered = false;
  }

  logout() {
    this.removeToken();
  }

  async authenticate(username: string, password: string) {
    const response = await this.http.post(environment.apiUrl + '/login', {
      username,
      password,
    });
    response.subscribe((data: any) => {
      this.setToken(data.token);
    });
    return null;
  }

  async register(username: string, password: string) {
    const response = await this.http.post(environment.apiUrl + '/register', {
      username,
      password,
    });
    response.subscribe((data: any) => {
      if (data.message === 'ok') {
        this.isRegistered = data.success;
      }
    });
    return null;
  }
}
