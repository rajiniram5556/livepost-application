import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
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

  constructor(private postService:PostSerivce,private router:Router) { 
    
  }

  ngOnInit(): void {
    console.log(this.post);
    console.log(this.Index);
  
  }
  onDelete(){
    this.postService.deletePost(this.Index);
    
  }
  onEdit(){
    this.router.navigate(["/post-edit",this.Index])
    //this.postService.updatePost(this.Index)
  }

}
