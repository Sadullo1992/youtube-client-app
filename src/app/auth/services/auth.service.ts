import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(): void {
    localStorage.setItem('fake-token', 'fake-jwt-token');
  }

  logout(): void {
    localStorage.removeItem('fake-token');
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('fake-token');
  }
}
