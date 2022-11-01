import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-campaign-overview',
  templateUrl: './campaign-overview.component.html',
  styleUrls: ['./campaign-overview.component.scss'],
})
export class CampaignOverviewComponent implements OnInit {
  post: Post = {
    user: {
      userName: '@testuser',
      firstName: 'Alina',
      lastName: 'Marasca',
    },
    imageUrl:
      'src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    views: 23,
    likes: 11,
    comments: 91,
  };
  posts!: any;
  constructor(
    private postService: PostsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((response: any) => {
      console.log('component');
      console.log(response);
      this.posts = response.data;
      console.log('components', this.posts);
    });
  }

  ngOnDestroy(): void {
    this.posts?.unsubscribe();
  }
}
