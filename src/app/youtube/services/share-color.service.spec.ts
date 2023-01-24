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

  it('#setColor set color and #getColor should return value from observable', (done) => {
    service.setColor('red');
    service.getColor().subscribe((color) => {
      expect(color).toEqual('red');
      done();
    });
  });
});
