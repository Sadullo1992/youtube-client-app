import { TestBed } from '@angular/core/testing';

import { TransferSearchDataService } from './transfer-search-data.service';

describe('TransferSearchDataService', () => {
  let service: TransferSearchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferSearchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transfer query value', () => {
    const query = 'angular unit test';
    service.shareData(query);
    service.getData().subscribe((data) => {
      expect(query).toEqual(data);
    });
  });
});
