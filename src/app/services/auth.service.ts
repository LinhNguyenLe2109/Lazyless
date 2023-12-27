import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment.development';
import { environment } from 'src/environments/environment';
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

  async authenticate(userName: string, password: string) {
    return new Promise<null>(async (resolve, reject) => {
      const response = await this.http.post(environment.apiUrl + '/login', {
        userName,
        password,
      });
      response.subscribe({
        next: (data: any) => {
          if (data.message === 'ok') {
            this.setToken(data.token);
            resolve(null);
          }
        },
        error: (err) => {
          reject(err);
        },
      });
      return null;
    });
  }

  async register(userName: string, password: string) {
    return new Promise<null>(async (resolve, reject) => {
      const response = await this.http.post(environment.apiUrl + '/register', {
        userName,
        password,
      });
      response.subscribe({
        next: (data: any) => {
          if (data.message === 'ok') {
            this.isRegistered = true;
            resolve(null);
          }
        },
        error: (err) => {
          reject(err);
        },
      });
      return null;
    });
  }
}
