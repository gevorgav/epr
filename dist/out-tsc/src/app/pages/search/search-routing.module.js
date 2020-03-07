import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
var routes = [
    {
        path: '',
        component: SearchComponent,
    }
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());
export { SearchRoutingModule };
//# sourceMappingURL=search-routing.module.js.map