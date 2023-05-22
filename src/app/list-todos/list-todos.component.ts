import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];

  message: string;

  constructor(
    private todoService: TodoDataService,
    private router: Router) {
  }

  ngOnInit() {
    this.refreshTodos();
  }

  updateTodo(id: number): void {
    this.router.navigate(['todos', id]);
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo('karina', id).subscribe(
      response => {
        this.message = `Delete of Todo ${id} Successful `;
        this.refreshTodos();
      },
      error => console.log(error)
    );
  }

  refreshTodos(): void {
    this.todoService.getDataTodos('karina').subscribe(
      response => this.todos = response
    );
  }

  addTodo(): void {
    this.router.navigate(['todos', -1]);
  }
}

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public isDone: boolean,
    public targetDate: Date
  ) { }
}
