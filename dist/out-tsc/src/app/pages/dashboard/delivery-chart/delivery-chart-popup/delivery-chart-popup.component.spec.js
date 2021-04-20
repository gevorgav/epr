import { async, TestBed } from '@angular/core/testing';
import { DeliveryChartPopupComponent } from './delivery-chart-popup.component';
describe('DeliveryChartPopupComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DeliveryChartPopupComponent]
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
//# sourceMappingURL=delivery-chart-popup.component.spec.js.map