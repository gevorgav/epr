export class SettingsModel {
    constructor(id, title, homePageMetaDescription, imageUrl1, imageUrl2, imageUrl3, mobileImageUrl) {
        this._id = id;
        this._title = title;
        this._imageUrl1 = imageUrl1;
        this._imageUrl2 = imageUrl2;
        this._imageUrl3 = imageUrl3;
        this._mobileImageUrl = mobileImageUrl;
        this._homePageMetaDescription = homePageMetaDescription;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get imageUrl1() {
        return this._imageUrl1;
    }
    set imageUrl1(value) {
        this._imageUrl1 = value;
    }
    get imageUrl2() {
        return this._imageUrl2;
    }
    set imageUrl2(value) {
        this._imageUrl2 = value;
    }
    get imageUrl3() {
        return this._imageUrl3;
    }
    set imageUrl3(value) {
        this._imageUrl3 = value;
    }
    get mobileImageUrl() {
        return this._mobileImageUrl;
    }
    set mobileImageUrl(value) {
        this._mobileImageUrl = value;
    }
    get homePageMetaDescription() {
        return this._homePageMetaDescription;
    }
    set homePageMetaDescription(value) {
        this._homePageMetaDescription = value;
    }
}
//# sourceMappingURL=settings.model.js.map