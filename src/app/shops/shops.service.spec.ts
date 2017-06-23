import { TestBed, inject } from '@angular/core/testing';

import { ShopsService } from './shops.service';

import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpModule } from '@angular/http';

describe('ShopsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopsService],
      imports: [
        RouterTestingModule,
        HttpModule
      ]
    });
  });

  it('should be created', inject([ShopsService], (service: ShopsService) => {
    expect(service).toBeTruthy();
  }));
});
