import {Component, OnInit} from '@angular/core';
import {ListDataService} from '../service/data/list-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];

  message: string;

  constructor(private todoService: ListDataService) {
  }

  ngOnInit() {
    this.refreshTodos();
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
}

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public isDone: boolean,
    public targetDate: Date
  ) { }
}
