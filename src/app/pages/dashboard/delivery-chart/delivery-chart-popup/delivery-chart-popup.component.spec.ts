import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryChartPopupComponent } from './delivery-chart-popup.component';

describe('DeliveryChartPopupComponent', () => {
  let component: DeliveryChartPopupComponent;
  let fixture: ComponentFixture<DeliveryChartPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryChartPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryChartPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
