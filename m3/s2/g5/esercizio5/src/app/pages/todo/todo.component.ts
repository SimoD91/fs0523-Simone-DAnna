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
  tasks: iTodo[] = [];
  filteredTasks: iTodo[] = [];

  ngOnInit() {
    this.loading = true;
    this.todoSvc.getAll().then((tasks) => {
      this.tasks = tasks;
      this.filterTasks();
      this.loading = false;
    });
  }

  save() {
    this.loading = true;
    this.newPost.completed = false;
    this.todoSvc.create(this.newPost).then(() => {
      this.todoSvc.getAll().then((tasks) => {
        this.tasks = tasks;
        this.filterTasks();
        this.loading = false;
      });
    });

    this.newPost.title = '';
  }

  filterTasks() {
    this.filteredTasks = this.tasks.filter(task => !task.completed);
  }

    completeTask(task: iTodo) {
      this.loading = true;
      task.completed = true;
      this.todoSvc.update(task).then(() => {
        this.todoSvc.getAll().then((tasks) => {
          this.tasks = tasks;
          this.filterTasks();
          this.loading = false;
        });
      });
    }
  }
