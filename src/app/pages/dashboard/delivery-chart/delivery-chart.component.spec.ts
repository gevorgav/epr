import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryChartComponent } from './delivery-chart.component';

describe('DeliveryChartComponent', () => {
  let component: DeliveryChartComponent;
  let fixture: ComponentFixture<DeliveryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
