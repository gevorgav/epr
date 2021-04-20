import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
const routes = [
    {
        path: '',
        component: SearchComponent,
    }
];
let SearchRoutingModule = class SearchRoutingModule {
};
SearchRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], SearchRoutingModule);
export { SearchRoutingModule };
//# sourceMappingURL=search-routing.module.js.map