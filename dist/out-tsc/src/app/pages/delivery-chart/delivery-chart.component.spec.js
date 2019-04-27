import { async, TestBed } from '@angular/core/testing';
import { DeliveryChartComponent } from './delivery-chart.component';
describe('DeliveryChartComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DeliveryChartComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DeliveryChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=delivery-chart.component.spec.js.map