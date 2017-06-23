import { TestBed, inject } from '@angular/core/testing';

import { ShopService } from './shop.service';

import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpModule } from '@angular/http';

describe('ShopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopService],
      imports: [
        RouterTestingModule,
        HttpModule
      ]
    });
  });

  it('should be created', inject([ShopService], (service: ShopService) => {
    expect(service).toBeTruthy();
  }));
});
