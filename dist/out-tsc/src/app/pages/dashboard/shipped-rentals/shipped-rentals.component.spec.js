import { async, TestBed } from '@angular/core/testing';
import { ShippedRentalsComponent } from './shipped-rentals.component';
describe('ShippedRentalsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShippedRentalsComponent]
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
//# sourceMappingURL=shipped-rentals.component.spec.js.map