import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
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

  logout() {
    this.removeToken();
  }

  async authenticate(username: string, password: string) {
    const response = await this.http.post(
      'http://localhost:3000/api/authenticate',
      {
        username,
        password,
      }
    );
    response.subscribe((data: any) => {
      this.setToken(data.token);
      return data.token;
    });
    return null;
  }
}
