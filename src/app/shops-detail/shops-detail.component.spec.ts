import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsDetailComponent } from './shops-detail.component';

import { ProductListItemComponent} from '../product-list-item/product-list-item.component';

import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpModule } from '@angular/http';

describe('ShopsDetailComponent', () => {
  let component: ShopsDetailComponent;
  let fixture: ComponentFixture<ShopsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsDetailComponent, ProductListItemComponent ],
      imports: [
        RouterTestingModule,
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
