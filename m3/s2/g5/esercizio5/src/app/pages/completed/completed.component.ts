import { Component } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {

  todo:Todo[] = [];

  constructor(private todoSvc:TodosService){}

    ngOnInit(){
      this.todoSvc.getAll().then(todo => {
        this.todo = todo.filter((todo: { completed: boolean }) => todo.completed === true);
      });
    }
  }
