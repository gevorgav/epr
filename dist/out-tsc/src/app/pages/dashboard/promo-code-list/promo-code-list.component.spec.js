import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { PromoCodeListComponent } from './promo-code-list.component';
describe('PromoCodeListComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [PromoCodeListComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PromoCodeListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=promo-code-list.component.spec.js.map