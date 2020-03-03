import { async, TestBed } from '@angular/core/testing';
import { AdditionalCategoryPopupComponent } from './additional-category-popup.component';
describe('AdditionalCotegoryPopupComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AdditionalCategoryPopupComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdditionalCategoryPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=additional-category-popup.component.spec.js.map