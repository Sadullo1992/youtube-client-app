import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogin = !!localStorage.getItem('fake-token');

  private subject = new BehaviorSubject<boolean>(this.isLogin);

  login(): void {
    localStorage.setItem('fake-token', 'fake-jwt-token');
    this.setLoginState(true);
  }

  logout(): void {
    localStorage.removeItem('fake-token');
    this.setLoginState(false);
  }

  isLoggedIn(): boolean {
    return this.subject.value;
  }

  private setLoginState(isLogin: boolean) {
    this.subject.next(isLogin);
  }

  getLoginState(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
