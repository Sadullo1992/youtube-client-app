import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeMainPageComponent } from './youtube-main-page.component';

describe('YoutubeMainPageComponent', () => {
  let component: YoutubeMainPageComponent;
  let fixture: ComponentFixture<YoutubeMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YoutubeMainPageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(YoutubeMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
