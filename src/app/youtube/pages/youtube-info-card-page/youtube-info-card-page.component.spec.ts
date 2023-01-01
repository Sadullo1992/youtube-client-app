import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeInfoCardPageComponent } from './youtube-info-card-page.component';

describe('YoutubeInfoCardPageComponent', () => {
  let component: YoutubeInfoCardPageComponent;
  let fixture: ComponentFixture<YoutubeInfoCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YoutubeInfoCardPageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(YoutubeInfoCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
