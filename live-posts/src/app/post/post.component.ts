import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostSerivce } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post?:Post;
  @Input() Index: number=0;

  constructor(private postService:PostSerivce) { 
    
  }

  ngOnInit(): void {
    console.log(this.post);
    console.log(this.Index);
  
  }
  onDelete(){
    this.postService.deletePost(this.Index);
    
  }

}
