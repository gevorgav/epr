import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, productService) {
        this.route = route;
        this.productService = productService;
        this.products = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (res) {
            _this.searchText = res.get("searchText").trim();
            if (_this.searchText) {
                _this.productService.getProductsByName(_this.searchText).subscribe(function (res) {
                    _this.products = res;
                    if (!res || res.length == 0) {
                        var text = _this.searchText[0].toUpperCase() + _this.searchText.slice(1);
                        _this.productService.getProductsByName(text).subscribe(function (res) {
                            _this.products = res;
                        });
                    }
                });
            }
        });
    };
    SearchComponent = tslib_1.__decorate([
        Component({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            ProductService])
    ], SearchComponent);
    return SearchComponent;
}());
export { SearchComponent };
//# sourceMappingURL=search.component.js.map