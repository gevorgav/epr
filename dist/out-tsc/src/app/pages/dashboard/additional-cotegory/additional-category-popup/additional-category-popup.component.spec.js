import { async, TestBed } from '@angular/core/testing';
import { AdditionalCategoryPopupComponent } from './additional-category-popup.component';
describe('AdditionalCotegoryPopupComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdditionalCategoryPopupComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AdditionalCategoryPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=additional-category-popup.component.spec.js.map