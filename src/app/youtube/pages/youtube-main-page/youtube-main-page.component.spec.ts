import {
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ToastrModule } from 'ngx-toastr';
import { TransferDataService } from 'src/app/core/services/transfer-data.service';
import { TransferSearchDataService } from 'src/app/core/services/transfer-search-data.service';
import { findComponent } from 'src/app/spec-helpers/element.spec-helpers';

import * as YoutubeActions from '../../../redux/actions/youtube.actions';
import { SortByTypeData } from '../../models/sort-by-type-data.model';

import { YoutubeMainPageComponent } from './youtube-main-page.component';

const mockSortTypeData: SortByTypeData = {
  type: 'word',
  value: '123',
};

describe('YoutubeMainPageComponent', () => {
  let component: YoutubeMainPageComponent;
  let fixture: ComponentFixture<YoutubeMainPageComponent>;
  let transferDataService: TransferDataService;
  let transferSearchDataService: TransferSearchDataService;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YoutubeMainPageComponent],
      imports: [ToastrModule.forRoot()],
      providers: [provideMockStore({ initialState: {} })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeMainPageComponent);
    component = fixture.componentInstance;
    transferDataService = TestBed.inject(TransferDataService);
    transferSearchDataService = TestBed.inject(TransferSearchDataService);
    store = TestBed.inject(MockStore);
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show sort block', () => {
    transferDataService.shareData(true);
    transferDataService.getData().subscribe((isShow) => {
      component.isShowSortBlock = isShow;
    });
    fixture.detectChanges();
    const el = findComponent(fixture, 'app-sort-block');
    expect(el).toBeTruthy();
  });

  it('should emit sort data', () => {
    component.isShowSortBlock = true;
    fixture.detectChanges();

    const el = findComponent(fixture, 'app-sort-block');
    el.triggerEventHandler('sort', mockSortTypeData);
    fixture.detectChanges();

    expect(mockSortTypeData).toEqual(component.sortTypeData);
  });

  it('should load search videos', () => {
    jest.spyOn(store, 'dispatch');

    const mockQuery = 'test';
    transferSearchDataService.shareData(mockQuery);
    transferSearchDataService.getData().subscribe((query) => {
      expect(store.dispatch).toHaveBeenCalledWith(YoutubeActions.loadSearchVideos({ query }));
    });

    fixture.detectChanges();
  });
});
