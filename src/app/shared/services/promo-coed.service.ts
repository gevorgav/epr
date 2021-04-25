import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { PromoCodeModel } from "../model/promo-code.model";
import { ParseService } from "./parse.service";
import { ShippingHttpService } from "./shipping-http.service";

@Injectable()
export class PromoCodeService {
    public static PROMO_CODE_MODEL = 'PromoCode';

    constructor(private parseService: ParseService) {
    }

    getPromoCodes(): Promise<PromoCodeModel[]> {
        const PromoCodeParse = this.parseService.parse.Object.extend(PromoCodeService.PROMO_CODE_MODEL);
        let promoCode = new PromoCodeParse();
        const query = new this.parseService.parse.Query(promoCode);
        return query.findAll().then(items => {
            return items.map(item => PromoCodeService.convertPromoCodesToPromoCodesModel(item));
        });
    }

    getPromoCodeByCode(code: string): Promise<PromoCodeModel> {
        let ParseModel = this.parseService.parse.Object.extend(PromoCodeService.PROMO_CODE_MODEL);
        const query = new this.parseService.parse.Query(ParseModel);
        let model = new PromoCodeModel();
        return query.equalTo('code', code).first().then(res => {
            if (res) {
                this.setCategoryFields(res, model);
            }
            return model;
        });
    }

    setShippingId(id: string, shippingInfoId: string): Observable<any> {
        let ParseModel = this.parseService.parse.Object.extend(PromoCodeService.PROMO_CODE_MODEL);
        const query = new this.parseService.parse.Query(ParseModel);
        const ParseObject = this.parseService.parse.Object.extend(ShippingHttpService.SHIPPING_INFO);
        let model = new PromoCodeModel();
        return of(query.equalTo('objectId', id).first().then(res => {
            res.set('shippingInfo', new ParseObject({ id: shippingInfoId }));
            res.set('isUsed', true);
            return res.save();
        }));
    }

    savePromoCode(model: PromoCodeModel): Promise<boolean> {
        let ParseModel = this.parseService.parse.Object.extend(PromoCodeService.PROMO_CODE_MODEL);
        let category = new ParseModel();
        this.setFieldsForSave(category, model);
        let promise;
        if (model.id) {
            const query = new this.parseService.parse.Query(ParseModel);
            query.equalTo('objectId', model.id);
            promise = query.first().then(
                res => {
                    this.setFieldsForSave(res, model);
                    return res.save();
                }
            );
        } else {
            promise = category.save().then(category => {
                return category.save();
            });
        }
        return promise;
    }

    private setFieldsForSave(category: any, model: PromoCodeModel) {
        category.set('code', model.code);
        category.set('discount', model.discount);
        category.set('isUsed', model.isUsed);
        category.set('shippingInfo', model.shippingInfoId);
    }

    deletePromoCode(Id: string): Promise<boolean> {
        const ParseModel = this.parseService.parse.Object.extend(PromoCodeService.PROMO_CODE_MODEL);
        const query = new this.parseService.parse.Query(ParseModel);
        query.equalTo("objectId", Id);
        return query.first().then((result) => {
            return result.destroy({});
        })
    }

    private setCategoryFields(category: any, model: PromoCodeModel) {
        model.code = category.attributes['code'];
        model.discount = category.attributes['discount'];
        model.id = category.id;
        model.isUsed = category.attributes['isUsed'];
        model.shippingInfoId = category.attributes['shippingInfo']?.id;
    }

    public static generateCode(length: number): string {
        var result = [];
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result.push(characters.charAt(Math.floor(Math.random() *
                charactersLength)));
        }
        return result.join('');
    }

    public static convertPromoCodesToPromoCodesModel(item: any): PromoCodeModel {
        let promoCode = new PromoCodeModel();
        promoCode.id = item.id;
        promoCode.code = item.attributes['code'];
        promoCode.isUsed = item.attributes['isUsed'];
        promoCode.discount = item.attributes['discount'];
        promoCode.shippingInfoId = item.attributes.shippingInfo?.id;
        return promoCode;
    }
}