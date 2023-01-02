import { TestBed } from '@angular/core/testing';

import { ShareColorService } from './share-color.service';

describe('ShareColorService', () => {
  let service: ShareColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
