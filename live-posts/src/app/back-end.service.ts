import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Post } from './post.model';
import { PostSerivce } from './post.service';
/* database=   https://x-blog-99284-default-rtdb.firebaseio.com/*/
@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostSerivce, private http: HttpClient) {}
  //fun1 - for saving the data

  saveData() {
    // step1:get list of posts from post.service
    //first we have to create constructor to intialize the post.service
    const listOfPosts: Post[] = this.postService.getPosts();
    this.http
      .put(
        'https://x-blog-99284-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });

    //ste2:send list of posts to data base
  }

  //fun2 for fetching the data
  fetchData() {
    this.http
      .get<Post[]>('https://x-blog-99284-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);

          // step2 - send to post.service
          this.postService.setPost(listOfPosts)
        })
      )
      .subscribe();
  }
}
