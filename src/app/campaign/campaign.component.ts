import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent implements OnInit {
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
  activeTab = 'Overview';

  constructor() {}

  ngOnInit(): void {}
  selectLocation(tab: string) {
    const location = tab;
    this.activeTab = location;
  }
}
