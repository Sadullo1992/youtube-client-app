import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomVideoPageComponent } from './custom-video-page.component';

describe('CustomVideoPageComponent', () => {
  let component: CustomVideoPageComponent;
  let fixture: ComponentFixture<CustomVideoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomVideoPageComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomVideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
