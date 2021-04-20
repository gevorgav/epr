import { __decorate, __metadata } from "tslib";
import { Component, HostListener } from '@angular/core';
let PageComponent = class PageComponent {
    constructor() {
        this.fixHeader = false;
        this.top = false;
    }
    onScroll(event) {
        let pos = window.pageYOffset;
        this.fixHeader = pos > 50;
        this.top = pos > 400;
    }
    ngOnInit() {
    }
};
__decorate([
    HostListener('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PageComponent.prototype, "onScroll", null);
PageComponent = __decorate([
    Component({
        selector: 'app-page',
        templateUrl: './page.component.html',
        styleUrls: ['./page.component.css']
    }),
    __metadata("design:paramtypes", [])
], PageComponent);
export { PageComponent };
//# sourceMappingURL=page.component.js.map