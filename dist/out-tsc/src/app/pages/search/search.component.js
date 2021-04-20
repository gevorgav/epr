import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
let SearchComponent = class SearchComponent {
    constructor(route, productService) {
        this.route = route;
        this.productService = productService;
        this.products = [];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(res => {
            this.searchText = res.get("searchText").trim();
            if (this.searchText) {
                this.productService.getProductsByName(this.searchText).then(res => {
                    this.products = res;
                    if (!res || res.length == 0) {
                        let text = this.searchText[0].toUpperCase() + this.searchText.slice(1);
                        this.productService.getProductsByName(text).then(res => {
                            this.products = res;
                        });
                    }
                });
            }
        });
    }
};
SearchComponent = __decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        ProductService])
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=search.component.js.map