import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostSerivce } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  listOfPosts:Post[]=[
    
  ];
  constructor(private postService:PostSerivce) { }

  ngOnInit(): void {
    this.listOfPosts=this.postService.getPost()
  }
  
  
}
