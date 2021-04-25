import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
let AboutUsComponent = class AboutUsComponent {
    constructor(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
    }
    ngOnInit() {
        this.titleService.setTitle('ABOUT US');
        this.metaService.updateTag({
            name: 'description', content: `
    It’s very cool and important for kids' activities to teach them to be a smart, fast and communicative person. Not only does our service bring them joy but we also want them to learn while they enjoy their childhood parties!! Interactive games are what can make your children learn literally everything fast and easily! Stay tuned for our virtual reality headset which is coming very soon! This is designed for kids to learn with different interesting and funny video games and to develop their imagination!
    `
        });
    }
};
AboutUsComponent = __decorate([
    Component({
        selector: 'app-about-us',
        templateUrl: './about-us.component.html',
        styleUrls: ['./about-us.component.css']
    }),
    __metadata("design:paramtypes", [Title,
        Meta])
], AboutUsComponent);
export { AboutUsComponent };
//# sourceMappingURL=about-us.component.js.map