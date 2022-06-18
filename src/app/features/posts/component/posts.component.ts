import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
// import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(
    // private postService: PostService

    private service: PostService
  ) { }

  ngOnInit(): void {
    // this.fetchPosts();
  }

  // public fetchPosts() {
  //   this.postService.getPosts().subscribe((res) => {
  //     console.log(res);

  //   })
  // }


  fetchPosts() {
    this.service.getPosts().subscribe((res) => {
      console.log('POST GOTTEN>>>>>>>', res);

    })
  }

}
