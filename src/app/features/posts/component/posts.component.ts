import { Component, OnInit } from '@angular/core';
import { IPosts } from '../models/posts.models';
import { PostService } from '../service/post.service';
// import { PostService } from '../services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postsList: IPosts[] = [];

  constructor(
    // private postService: PostService

    private service: PostService
  ) { }

  ngOnInit(): void {
  }




  fetchPosts() {
    this.service.getPosts().subscribe((res) => {
      console.log('POST GOTTEN>>>>>>>', res);
      this.postsList = res;

    })
  }

}
