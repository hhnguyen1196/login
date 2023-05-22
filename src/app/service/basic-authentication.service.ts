import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) { }

  executeAuthenticationService(username: string, password: string): Observable<any> {
    const basicAuthHeaderString = 'basic ' + window.btoa(username + ':' + password);
    const headers: HttpHeaders = new HttpHeaders({
      authorization: basicAuthHeaderString
    });
    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basic-auth`,
      {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticationUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        }
      )
    );
  }

  getAuthenticationUser(): string {
    return  sessionStorage.getItem('authenticationUser');
  }

  getAuthenticationToken(): string {
      if (this.getAuthenticationUser()) {
        return sessionStorage.getItem('token');
      }
  }

  logout(): void {
    sessionStorage.removeItem('authenticationUser');
    sessionStorage.removeItem('token');
  }
}

export class AuthenticationBean {
  constructor(public message: string) {
  }
}
