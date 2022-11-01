import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignYoutubeComponent } from './campaign-youtube.component';

describe('CampaignYoutubeComponent', () => {
  let component: CampaignYoutubeComponent;
  let fixture: ComponentFixture<CampaignYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignYoutubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
