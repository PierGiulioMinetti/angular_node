import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPosts } from '../models/posts.models';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost:3000/posts';

  constructor(
    public http: HttpClient
  ) { }

  getPosts() {
    return this.http.get<IPosts[]>(this.url)
  }
}
