import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) {
  }

  getDataTodos(username: string): Observable<any> {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  getTodo(username: string, id: number): Observable<any> {
    // const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // const headers: HttpHeaders = new HttpHeaders({
    //   authorization: basicAuthHeaderString
    //   });
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  createTodo(username: string, todo: Todo): Observable<any> {
    return this.http.post<Todo>(`http://localhost:8080/users/${username}/todos`, todo);
  }

  updateTodo(username: string, id: number, todo: Todo): Observable<any> {
    return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }

  deleteTodo(username: string, id: number): Observable<any> {
    return this.http.delete<Todo[]>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  // createBasicAuthenticationHttpHeader(): string {
  //   const username = 'username';
  //   const password = 'password';
  //   const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
