import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomVideosComponent } from './custom-videos.component';

describe('CustomVideosComponent', () => {
  let component: CustomVideosComponent;
  let fixture: ComponentFixture<CustomVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomVideosComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
