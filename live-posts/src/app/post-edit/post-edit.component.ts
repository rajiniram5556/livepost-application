import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostListComponent } from '../post-list/post-list.component';
import { Post } from '../post.model';
import { PostSerivce } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number =0;
  editMode=false;

  constructor(private postService: PostSerivce,private router:Router,private route:ActivatedRoute) {}

  ngOnInit(): void {
    let title='';
    let description='';
    let imagePath='';
    this.route.params.subscribe((params:Params)=>{
      if(params['index']){
        console.log(params['index']);
        this.index=params['index'];
        const post= this.postService.getpost(this.index);
        title=post.title
        description=post.description
        imagePath=post.imagePath
        this.editMode=true;

    }
    
    });

    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required]),
    });
  }
  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;
    //ready with object
    const post: Post = new Post(
      title,
      description,
      imagePath,
      'test@test.com',
      new Date()
    );
    // CALLING POST SERVICE
    if(this.editMode){
      this.postService.updatePost(this.index,post)
    } else{
      this.postService.addPost(post)
    }
    

    // want to navigate to post list

    this.router.navigate(["/post-list"])

    


  }
}
