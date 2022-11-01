import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostComponent } from './components/post/post.component';
import { CampaignComponent } from './campaign/campaign.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { LocationHeaderComponent } from './components/location-header/location-header.component';
import { NavigationListComponent } from './components/navigation-list/navigation-list.component';
import { CampaignPostsComponent } from './campaign-posts/campaign-posts.component';
import { CampaignYoutubeComponent } from './campaign-youtube/campaign-youtube.component';
import { UserComponent } from './components/user/user.component';
import { CampaignOverviewComponent } from './components/campaign-overview/campaign-overview.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostComponent,
    CampaignComponent,
    PageHeaderComponent,
    LocationHeaderComponent,
    NavigationListComponent,
    CampaignPostsComponent,
    CampaignYoutubeComponent,
    UserComponent,
    CampaignOverviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
