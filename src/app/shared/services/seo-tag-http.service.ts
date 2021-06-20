import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SeoTagsModel} from '../model/seo-tags.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class SeoTagHttpService {

  constructor(private http: HttpClient) {
  }

  public getHomePageSeo(): Observable<SeoTagsModel> {
    return this.http.get(`${environment.url}home-page`).pipe(
      map((res) => {
        const seoTagsModel = new SeoTagsModel();
        seoTagsModel.title = res['homePageTitle'];
        seoTagsModel.description = res['homePageMetaDescription'];
        seoTagsModel.jSONLD = res['jSONLD'];
        return seoTagsModel;
      })
    )
  }

  public getCategorySeo(categoryTitle: string): Observable<SeoTagsModel> {
    return this.http.get(`${environment.url}category/${categoryTitle}`).pipe(
      map((res) => {
        const seoTagsModel = new SeoTagsModel();
        seoTagsModel.title = res['pageTitle']? res['pageTitle'] : res['title'];
        seoTagsModel.description = res['metaDescription'];
        seoTagsModel.jSONLD = res['jSONLD'];
        return seoTagsModel;
      })
    )
  }

  public getProductSeo(product): Observable<SeoTagsModel> {
    return this.http.get(`${environment.url}product/${product}`).pipe(
      map((res) => {
        const seoTagsModel = new SeoTagsModel();
        seoTagsModel.title = res['pageTitle']? res['pageTitle'] : res['title'];
        seoTagsModel.description = res['metaDescription'];
        seoTagsModel.jSONLD = res['jSONLD'];
        return seoTagsModel;
      })
    )
  }
}
