import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PromoCodeService } from '../../../shared/services/promo-coed.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, FormGroup } from '@angular/forms';
import { PromoCodeModel } from '../../../shared/model/promo-code.model';
let PromoCodeListComponent = class PromoCodeListComponent {
    constructor(promoCodeService, cdr) {
        this.promoCodeService = promoCodeService;
        this.cdr = cdr;
        this.displayedColumns = ['promoCode', 'discount', 'isUsed', 'shippingInfoId', 'action'];
    }
    ngOnInit() {
        this.promoCodeService.getPromoCodes()
            .then(products => {
            this.dataSource = new MatTableDataSource(products);
            this.dataSource.paginator = this.paginator;
        });
        this.initForm();
    }
    applyFilter($event) {
        const filterValue = $event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    initForm(model) {
        this.promoForm = new FormGroup({
            id: new FormControl((model === null || model === void 0 ? void 0 : model.id) ? model.id : ''),
            discount: new FormControl((model === null || model === void 0 ? void 0 : model.discount) ? model.discount : 0),
            isUsed: new FormControl((model === null || model === void 0 ? void 0 : model.isUsed) ? model.isUsed : false),
            promoCode: new FormControl({ value: (model === null || model === void 0 ? void 0 : model.code) ? model.code : '', disabled: true }),
        });
    }
    generateCode() {
        this.promoForm.get('promoCode').setValue(PromoCodeService.generateCode(6));
    }
    save() {
        this.promoCodeService.savePromoCode(this.convertToPromoCodeModel(this.promoForm)).then(res => {
            this.ngOnInit();
        });
    }
    edit(item) {
        this.initForm(item);
    }
    delete(id) {
        this.promoCodeService.deletePromoCode(id).then(res => {
            this.ngOnInit();
        });
    }
    convertToPromoCodeModel(item) {
        let model = new PromoCodeModel();
        if (item.value.id) {
            model.id = item.value.id;
        }
        model.code = item.get('promoCode').value;
        model.discount = item.value.discount;
        model.isUsed = item.value.isUsed;
        return model;
    }
};
__decorate([
    ViewChild(MatPaginator),
    __metadata("design:type", MatPaginator)
], PromoCodeListComponent.prototype, "paginator", void 0);
PromoCodeListComponent = __decorate([
    Component({
        selector: 'app-promo-code-list',
        templateUrl: './promo-code-list.component.html',
        styleUrls: ['./promo-code-list.component.css']
    }),
    __metadata("design:paramtypes", [PromoCodeService, ChangeDetectorRef])
], PromoCodeListComponent);
export { PromoCodeListComponent };
//# sourceMappingURL=promo-code-list.component.js.map