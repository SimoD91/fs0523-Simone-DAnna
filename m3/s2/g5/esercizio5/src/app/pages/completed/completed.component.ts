import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  todo: Todo[] = [];
  loading: boolean = false;

  constructor(private todoSvc: TodosService) {}

  ngOnInit() {
    this.loading = true;
    this.todoSvc.getAll().then(todo => {
      this.todo = todo.filter((task: Todo) => task.completed === true);
      this.loading = false;
    });
  }

  deleteTask(task: Todo) {
    this.loading = true;
    this.todoSvc.delete(task.id.toString()).then(() => {
      this.todo = this.todo.filter(t => t.id !== task.id);
      this.loading = false;
    });
  }

  updateTask(task: Todo) {
    this.loading = true;
    task.completed = false;
    this.todoSvc.update(task).then(() => {
      this.todo = this.todo.filter(t => t.id !== task.id);
      this.loading = false;
    });
  }
}
