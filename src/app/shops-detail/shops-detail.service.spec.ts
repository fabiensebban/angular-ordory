import { TestBed, inject } from '@angular/core/testing';

import { ShopsDetailService } from './shops-detail.service';

import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpModule } from '@angular/http';

describe('ShopsDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopsDetailService],
      imports: [
        RouterTestingModule,
        HttpModule
      ],
    });
  });

  it('should be created', inject([ShopsDetailService], (service: ShopsDetailService) => {
    expect(service).toBeTruthy();
  }));
});
