import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
let PrivacyComponent = class PrivacyComponent {
    constructor(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
    }
    ngOnInit() {
        this.titleService.setTitle('Privacy Statement/Terms of Use ');
        this.metaService.updateTag({
            name: 'description', content: `
    Entertainment Party Rentals, LLC is committed to the protection of your personal information held within our company. This Internet Privacy Statement demonstrates our commitment to your privacy.
    `
        });
    }
};
PrivacyComponent = __decorate([
    Component({
        selector: 'app-privacy',
        templateUrl: './privacy.component.html',
        styleUrls: ['./privacy.component.css']
    }),
    __metadata("design:paramtypes", [Title,
        Meta])
], PrivacyComponent);
export { PrivacyComponent };
//# sourceMappingURL=privacy.component.js.map