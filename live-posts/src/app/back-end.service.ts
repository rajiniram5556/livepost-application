import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { PostSerivce } from "./post.service";

@Injectable({providedIn:'root'})
export class BackEndService {

    constructor(private postService: PostSerivce){}
    //fun1 - for saving the data

    saveData(){
        // step1:get list of posts from post.service
        //first we have to create constructor to intialize the post.service
        const listOfPosts:Post[]=this.postService.getPosts();
         


        //ste2:send list of posts to data base
    }



    //fun2 for fetching the dat
}