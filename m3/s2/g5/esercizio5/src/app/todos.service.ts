import { Injectable } from '@angular/core';
import { Todo } from './Models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() {}

    apiUrl:string ="http://localhost:3000/todolist";


    getAll(){
      return fetch(this.apiUrl).then(res => res.json())
    }

    getById(id:number){
      return fetch(this.apiUrl+`/${id}`).then(res => res.json())
    }

    create(todo:Todo){
      return fetch(this.apiUrl,{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(todo)
      }).then(res => res.json())
    }

    update(todo:Todo){
      return fetch(this.apiUrl+`/${todo.id}`,{
        method: "PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(todo)
      }).then(res => res.json())
    }

    delete(id:string){
      return fetch(this.apiUrl+`/${id}`,{
        method: "DELETE",
        headers:{
          "Content-Type":"application/json"
        },
      }).then(res => res.json())
    }

  }
