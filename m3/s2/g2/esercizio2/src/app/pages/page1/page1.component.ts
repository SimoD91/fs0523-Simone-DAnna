import { Component } from '@angular/core';
import { IPost } from '../../Models/ipost';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {

  post:IPost[] = [];

  constructor(private postSvc:PostService){}

  ngOnInit(){
  this.postSvc.getPost()
  .then((res:IPost[]) => this.post = res)
  }
  }
