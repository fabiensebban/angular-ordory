import { TestBed, inject } from '@angular/core/testing';

import { ShopsDetailService } from './shops-detail.service';

describe('ShopsDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopsDetailService]
    });
  });

  it('should be created', inject([ShopsDetailService], (service: ShopsDetailService) => {
    expect(service).toBeTruthy();
  }));
});
