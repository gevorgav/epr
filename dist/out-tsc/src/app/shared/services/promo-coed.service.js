var PromoCodeService_1;
import { __decorate, __metadata } from "tslib";
import { Injectable } from "@angular/core";
import { PromoCodeModel } from "../model/promo-code.model";
import { ParseService } from "./parse.service";
let PromoCodeService = PromoCodeService_1 = class PromoCodeService {
    constructor(parseService) {
        this.parseService = parseService;
    }
    getPromoCodes() {
        const PromoCodeParse = this.parseService.parse.Object.extend(PromoCodeService_1.PROMO_CODE_MODEL);
        let promoCode = new PromoCodeParse();
        const query = new this.parseService.parse.Query(promoCode);
        return query.findAll().then(items => {
            return items.map(item => PromoCodeService_1.convertPromoCodesToPromoCodesModel(item));
        });
    }
    getPromoCodeById() {
        return null;
    }
    savePromoCode(model) {
        return null;
    }
    static generateCode(length) {
        var result = [];
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result.push(characters.charAt(Math.floor(Math.random() *
                charactersLength)));
        }
        return result.join('');
    }
    static convertPromoCodesToPromoCodesModel(item) {
        let promoCode = new PromoCodeModel();
        promoCode.id = item.id;
        promoCode.code = item.attributes['code'];
        promoCode.isUsed = item.attributes['isUsed'];
        promoCode.discount = item.attributes['discount'];
        promoCode.shippingInfoId = item.attributes['shippingInfo']['id'];
        return promoCode;
    }
};
PromoCodeService.PROMO_CODE_MODEL = 'PromoCode';
PromoCodeService = PromoCodeService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ParseService])
], PromoCodeService);
export { PromoCodeService };
//# sourceMappingURL=promo-coed.service.js.map