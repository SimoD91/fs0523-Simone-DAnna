import { Injectable } from '@angular/core';
import { IPost } from './Models/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post:IPost[] = [
    {
      id:0,
      body:'ciao',
      title:'Post1',
      active:true,
      type:"News"
    },
    {
      id:1,
      body:'CIAOCIAO',
      title:'Post2',
      active:true,
      type:"News"
    },
    {
      id:2,
      body:'CIAOCIAOCIAO',
      title:'Post3',
      active:false,
      type:"Politic"
    },
    {
      id:3,
      body:'CIAOCIAOCIAO',
      title:'Post4',
      active:true,
      type:"Education"
    },
    {
      id:4,
      body:'CIAOCIAOCIAOaaaa',
      title:'Post5',
      active:false,
      type:"Politic"
    },
    {
      id:5,
      body:'CIAOCIAOCIAOWWWWWWWWWWWWW',
      title:'Post6',
      active:true,
      type:"News"
    }
  ];

  constructor() { }

  getActivePosts(){
    return this.post.filter(p => p.active)
  }

  getInactivePosts(){
    return this.post.filter(p => !p.active)
  }

  updatePost(id: number, updatedPost: IPost): void {
    const index = this.post.findIndex(post => post.id === id);

    if (index !== -1) {
      this.post[index] = { ...this.post[index], ...updatedPost };
    }
  }

}
