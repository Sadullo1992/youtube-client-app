import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomVideoItemComponent } from './custom-video-item.component';

describe('CustomVideoItemComponent', () => {
  let component: CustomVideoItemComponent;
  let fixture: ComponentFixture<CustomVideoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomVideoItemComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomVideoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
