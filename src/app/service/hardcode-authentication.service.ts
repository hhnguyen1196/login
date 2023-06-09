import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {
  constructor() { }
  authentication(username, password): boolean {
    if (username === 'user' && password === 'password') {
      sessionStorage.setItem('authenticationUser', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('authenticationUser');
    return !(user === null);
  }

  logout(): void {
    sessionStorage.removeItem('authenticationUser');
  }
}
