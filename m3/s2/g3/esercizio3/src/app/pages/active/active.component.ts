import { Component, OnInit } from '@angular/core';
import { PostService } from '../../posts.service';
import { IPost } from '../../Models/ipost';
import { CustomComponent } from '../../custom/custom.component';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export class ActiveComponent implements OnInit {

  posts:IPost[] = [];

  constructor(private postsSvc:PostService){}

  ngOnInit(){
    this.posts = this.postsSvc.getActivePosts()
  }


}
