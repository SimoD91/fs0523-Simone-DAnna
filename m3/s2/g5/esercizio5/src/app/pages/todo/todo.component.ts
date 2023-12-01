import { Component } from '@angular/core';
import { iTodo } from '../../Models/itodo';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  constructor(private todoSvc:TodosService){}

  newPost:iTodo = {
    id: 0,
    title: '',
    completed: true
  };

  loading:boolean = false;

  save(){
    this.loading = true;
    this.todoSvc.create(this.newPost).then(res => {
      this.loading = false
    })
  };

}
