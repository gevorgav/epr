import * as tslib_1 from "tslib";
import { Component, HostListener } from '@angular/core';
var PageComponent = /** @class */ (function () {
    function PageComponent() {
        this.fixHeader = false;
        this.top = false;
    }
    PageComponent.prototype.onScroll = function (event) {
        var pos = window.pageYOffset;
        this.fixHeader = pos > 50;
        this.top = pos > 400;
    };
    PageComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        HostListener('window:scroll', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], PageComponent.prototype, "onScroll", null);
    PageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-page',
            templateUrl: './page.component.html',
            styleUrls: ['./page.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}());
export { PageComponent };
//# sourceMappingURL=page.component.js.map