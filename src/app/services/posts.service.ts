import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  //http
  private readonly apiUrl = `https://graph.instagram.com/me/media?fields=username,media_url&access_token=IGQVJYd0lPSmt1Mk9pWmtLZAWl1UkVZAQWszS1dyS0NjVUsxY0VMeGFLckxRTm1pWFotd282YmRpVVRlUlFDRXNLcVRuME9GeV9PdW1EVzkya1pRVmdxbk5GLUNOVUhlMWhsLS1TN2NFdnRFbW1iVHZAxaAZDZD`;

  constructor(private http: HttpClient) {}

  // get Posts
  getPosts(): Observable<any> {
    console.log('service');
    const posts = this.http.get<any>(this.apiUrl);
    return posts;
  }

  //filter data from response and get only what we need
}
