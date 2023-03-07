import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostSerivce {
    listOfPosts: Post[] = [
        new Post(
          'Nature',
          'Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.',
          'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg',
          'test@test.com',
          new Date(),
          5
        ),
        new Post(
          'Araku Valley',
          'Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh. Its surrounded by the thick forests of the Eastern Ghats mountain range. The Tribal Museum is dedicated to the areas numerous indigenous tribes, known for their traditional Dhimsa dance, and showcases traditional handicrafts.',
          'https://vizagtourism.org.in/images/places-to-visit/header/araku-valley-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg',
          'test@test.com',
          new Date(),
          2
        ),
        new Post(
          'Cricket',
          'Awesome match 2',
          'https://d1e00ek4ebabms.cloudfront.net/production/a646c9b7-13a5-4420-ab42-13ac0cf8a158.jpg',
          'test@test.com',
          new Date(),
          3
        )
      ];

      getPost(){
        return this.listOfPosts;
      }
      deletePost(Index: number){
        this.listOfPosts.splice(Index,1)
      }
      addPost(post:Post){
        this.listOfPosts.push(post);

      }

      updatePost(Index: number,post:Post){
        this.listOfPosts[Index]=post;

      }

      getpost(Index:number){
        return this.listOfPosts[Index];

      }

      likePost(Index:number){
        this.listOfPosts[Index].numberOfLikes+=1;
      }

}