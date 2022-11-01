import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent implements OnInit {
  activeTab = 'Overview';

  constructor() {}

  ngOnInit(): void {}
  selectLocation(tab: string) {
    const location = tab;
    this.activeTab = location;
  }
}
