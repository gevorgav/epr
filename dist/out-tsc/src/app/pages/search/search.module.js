import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = tslib_1.__decorate([
        NgModule({
            declarations: [SearchComponent],
            imports: [
                CommonModule,
                SearchRoutingModule
            ]
        })
    ], SearchModule);
    return SearchModule;
}());
export { SearchModule };
//# sourceMappingURL=search.module.js.map