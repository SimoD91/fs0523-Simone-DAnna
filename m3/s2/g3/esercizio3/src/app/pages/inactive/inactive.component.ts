import { Component } from '@angular/core';
import { IPost } from '../../Models/ipost';
import { PostService } from '../../posts.service';
import { CustomComponent } from '../../custom/custom.component';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrl: './inactive.component.scss'
})
export class InactiveComponent {
  posts:IPost[] = [];

  constructor(private postsSvc:PostService){}

  ngOnInit(){
    this.posts = this.postsSvc.getInactivePosts()
  }
}
