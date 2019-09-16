import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippedRentalsComponent } from './shipped-rentals.component';

describe('ShippedRentalsComponent', () => {
  let component: ShippedRentalsComponent;
  let fixture: ComponentFixture<ShippedRentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippedRentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippedRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
