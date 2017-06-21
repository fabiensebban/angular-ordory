import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsDetailComponent } from './shops-detail.component';

describe('ShopsDetailComponent', () => {
  let component: ShopsDetailComponent;
  let fixture: ComponentFixture<ShopsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsDetailComponent ]
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
