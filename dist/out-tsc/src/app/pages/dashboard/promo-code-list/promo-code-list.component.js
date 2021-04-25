import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PromoCodeService } from '../../../shared/services/promo-coed.service';
let PromoCodeListComponent = class PromoCodeListComponent {
    // @ViewChild(MatPaginator) paginator: MatPaginator;
    // @ViewChild(MatSort) sort: MatSort;
    constructor(promoCodeService) {
        this.promoCodeService = promoCodeService;
        this.dataSource = new MatTableDataSource();
    }
    ngOnInit() {
        this.promoCodeService.getPromoCodes().then(items => {
            this.dataSource = new MatTableDataSource(items);
            this.initTable();
        });
    }
    initTable() {
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
    }
    applyFilter($event) { }
};
PromoCodeListComponent = __decorate([
    Component({
        selector: 'app-promo-code-list',
        templateUrl: './promo-code-list.component.html',
        styleUrls: ['./promo-code-list.component.css']
    }),
    __metadata("design:paramtypes", [PromoCodeService])
], PromoCodeListComponent);
export { PromoCodeListComponent };
//# sourceMappingURL=promo-code-list.component.js.map