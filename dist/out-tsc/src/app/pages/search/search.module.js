import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
let SearchModule = class SearchModule {
};
SearchModule = __decorate([
    NgModule({
        declarations: [SearchComponent],
        imports: [
            CommonModule,
            SearchRoutingModule
        ]
    })
], SearchModule);
export { SearchModule };
//# sourceMappingURL=search.module.js.map