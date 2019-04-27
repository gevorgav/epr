import { async, TestBed } from '@angular/core/testing';
import { DeliveryChartPopupComponent } from './delivery-chart-popup.component';
describe('DeliveryChartPopupComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DeliveryChartPopupComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DeliveryChartPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=delivery-chart-popup.component.spec.js.map