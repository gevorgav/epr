import { async, TestBed } from '@angular/core/testing';
import { ShippedRentalsComponent } from './shipped-rentals.component';
describe('ShippedRentalsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ShippedRentalsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ShippedRentalsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=shipped-rentals.component.spec.js.map