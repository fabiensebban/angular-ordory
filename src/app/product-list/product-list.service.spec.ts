import { TestBed, inject } from '@angular/core/testing';

import { ProductListService } from './product-list.service';

import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpModule } from '@angular/http';


describe('ProductListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductListService],
      imports: [
        RouterTestingModule,
        HttpModule
      ],
    });
  });

  it('should be created', inject([ProductListService], (service: ProductListService) => {
    expect(service).toBeTruthy();
  }));
});
