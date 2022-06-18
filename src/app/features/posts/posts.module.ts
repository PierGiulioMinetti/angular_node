import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './component/posts.component';
import { PostService } from './service/post.service';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule

  ],
  providers: [
    PostService
  ]
})
export class PostsModule { }
