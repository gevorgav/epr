import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeoTagsModel } from '../model/seo-tags.model';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
let SeoTagHttpService = class SeoTagHttpService {
    constructor(http) {
        this.http = http;
    }
    getHomePageSeo() {
        return this.http.get(`${environment.url}home-page`).pipe(map((res) => {
            const seoTagsModel = new SeoTagsModel();
            seoTagsModel.title = res['homePageTitle'];
            seoTagsModel.description = res['homePageMetaDescription'];
            seoTagsModel.jSONLD = res['jSONLD'];
            return seoTagsModel;
        }));
    }
    getCategorySeo(categoryTitle) {
        return this.http.get(`${environment.url}category/${categoryTitle}`).pipe(map((res) => {
            const seoTagsModel = new SeoTagsModel();
            seoTagsModel.title = res['pageTitle'] ? res['pageTitle'] : res['title'];
            seoTagsModel.description = res['metaDescription'];
            seoTagsModel.jSONLD = res['jSONLD'];
            return seoTagsModel;
        }));
    }
    getProductSeo(productId) {
        return this.http.get(`${environment.url}product/${productId}`).pipe(map((res) => {
            const seoTagsModel = new SeoTagsModel();
            seoTagsModel.title = res['pageTitle'] ? res['pageTitle'] : res['title'];
            seoTagsModel.description = res['metaDescription'];
            seoTagsModel.jSONLD = res['jSONLD'];
            return seoTagsModel;
        }));
    }
};
SeoTagHttpService = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [HttpClient])
], SeoTagHttpService);
export { SeoTagHttpService };
//# sourceMappingURL=seo-tag-http.service.js.map