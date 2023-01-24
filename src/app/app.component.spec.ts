import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { findComponent } from './spec-helpers/element.spec-helpers';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render header', () => {
    const header = findComponent(fixture, 'app-header');
    expect(header).toBeTruthy();
  });

  it('should contain a router outlet', () => {
    const el = findComponent(fixture, 'router-outlet');
    expect(el).toBeTruthy();
  });

  it('should render footer', () => {
    const footer = findComponent(fixture, 'app-footer');
    expect(footer).toBeTruthy();
  });
});
