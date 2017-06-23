import { TestBed, inject } from '@angular/core/testing';

import { ProductListItemService } from './product-list-item.service';

import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpModule } from '@angular/http';

describe('ProductListItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductListItemService],
      imports: [
        RouterTestingModule,
        HttpModule
      ],
    });
  });

  it('should be created', inject([ProductListItemService], (service: ProductListItemService) => {
    expect(service).toBeTruthy();
  }));
});
