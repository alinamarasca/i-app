import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPostsComponent } from './campaign-posts.component';

describe('CampaignPostsComponent', () => {
  let component: CampaignPostsComponent;
  let fixture: ComponentFixture<CampaignPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
