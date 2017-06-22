import { TestBed, inject } from '@angular/core/testing';

import { ShopDetailService } from './shops-detail.service';

describe('ShopsDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopDetailService]
    });
  });

  it('should be created', inject([ShopDetailService], (service: ShopDetailService) => {
    expect(service).toBeTruthy();
  }));
});
