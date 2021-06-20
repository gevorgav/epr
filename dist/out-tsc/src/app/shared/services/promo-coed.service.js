var PromoCodeService_1;
import { __decorate, __metadata } from "tslib";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { PromoCodeModel } from "../model/promo-code.model";
import { ParseService } from "./parse.service";
import { ShippingHttpService } from "./shipping-http.service";
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
    getPromoCodeByCode(code) {
        let ParseModel = this.parseService.parse.Object.extend(PromoCodeService_1.PROMO_CODE_MODEL);
        const query = new this.parseService.parse.Query(ParseModel);
        let model = new PromoCodeModel();
        return query.equalTo('code', code).first().then(res => {
            if (res) {
                this.setCategoryFields(res, model);
            }
            return model;
        });
    }
    setShippingId(id, shippingInfoId) {
        let ParseModel = this.parseService.parse.Object.extend(PromoCodeService_1.PROMO_CODE_MODEL);
        const query = new this.parseService.parse.Query(ParseModel);
        const ParseObject = this.parseService.parse.Object.extend(ShippingHttpService.SHIPPING_INFO);
        let model = new PromoCodeModel();
        return of(query.equalTo('objectId', id).first().then(res => {
            res.set('shippingInfo', new ParseObject({ id: shippingInfoId }));
            res.set('isUsed', true);
            return res.save();
        }));
    }
    savePromoCode(model) {
        let ParseModel = this.parseService.parse.Object.extend(PromoCodeService_1.PROMO_CODE_MODEL);
        let category = new ParseModel();
        this.setFieldsForSave(category, model);
        let promise;
        if (model.id) {
            const query = new this.parseService.parse.Query(ParseModel);
            query.equalTo('objectId', model.id);
            promise = query.first().then(res => {
                this.setFieldsForSave(res, model);
                return res.save();
            });
        }
        else {
            promise = category.save().then(category => {
                return category.save();
            });
        }
        return promise;
    }
    setFieldsForSave(category, model) {
        category.set('code', model.code);
        category.set('discount', model.discount);
        category.set('isUsed', model.isUsed);
        category.set('shippingInfo', model.shippingInfoId);
    }
    deletePromoCode(Id) {
        const ParseModel = this.parseService.parse.Object.extend(PromoCodeService_1.PROMO_CODE_MODEL);
        const query = new this.parseService.parse.Query(ParseModel);
        query.equalTo("objectId", Id);
        return query.first().then((result) => {
            return result.destroy({});
        });
    }
    setCategoryFields(category, model) {
        var _a;
        model.code = category.attributes['code'];
        model.discount = category.attributes['discount'];
        model.id = category.id;
        model.isUsed = category.attributes['isUsed'];
        model.shippingInfoId = (_a = category.attributes['shippingInfo']) === null || _a === void 0 ? void 0 : _a.id;
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
        var _a;
        let promoCode = new PromoCodeModel();
        promoCode.id = item.id;
        promoCode.code = item.attributes['code'];
        promoCode.isUsed = item.attributes['isUsed'];
        promoCode.discount = item.attributes['discount'];
        promoCode.shippingInfoId = (_a = item.attributes.shippingInfo) === null || _a === void 0 ? void 0 : _a.id;
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