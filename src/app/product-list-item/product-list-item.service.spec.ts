import { TestBed, inject } from '@angular/core/testing';

import { ProductListItemService } from './product-list-item.service';

describe('ProductListItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductListItemService]
    });
  });

  it('should be created', inject([ProductListItemService], (service: ProductListItemService) => {
    expect(service).toBeTruthy();
  }));
});
