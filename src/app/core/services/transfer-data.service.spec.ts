import { TestBed } from '@angular/core/testing';

import { TransferDataService } from './transfer-data.service';

describe('TransferDataService', () => {
  let service: TransferDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transfer boolean value', () => {
    service.shareData(true);
    service.getData().subscribe((data) => {
      expect(true).toEqual(data);
    });
  });
});
