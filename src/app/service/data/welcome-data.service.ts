import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }


  executeHelloWorldBeanService(): Observable<any> {
    const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    const headers: HttpHeaders = new HttpHeaders({
      authorization: basicAuthHeaderString});
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean', {headers});
  }

  executeHelloWorldServicesWithPathVariable(name: string): Observable<any> {
    const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    const headers: HttpHeaders = new HttpHeaders({
      authorization: basicAuthHeaderString});
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, {headers});
  }

  createBasicAuthenticationHttpHeader(): string {
    const username = 'user';
    const password = 'password';
    return 'Basic ' + window.btoa(username + ':' + password);
  }

}

export class HelloWorldBean {
  constructor() {
  }
}
