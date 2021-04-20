export class CategoryModel {
    constructor(id, title, description, imageUrl, metaDescription, pathParam, pageTitle, order, $items, items, count) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._imageUrl = imageUrl;
        this._items = items;
        this._$items = $items;
        this._order = order;
        this._metaDescription = metaDescription;
        this._pathParam = pathParam;
        this._count = count;
        this._pageTitle = pageTitle;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get $items() {
        return this._$items;
    }
    set $items(value) {
        this._$items = value;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    get description() {
        return this._description;
    }
    get imageUrl() {
        return this._imageUrl;
    }
    get order() {
        return this._order;
    }
    get metaDescription() {
        return this._metaDescription;
    }
    set metaDescription(value) {
        this._metaDescription = value;
    }
    get pathParam() {
        return this._pathParam;
    }
    set pathParam(value) {
        this._pathParam = value;
    }
    get count() {
        return this._count;
    }
    set count(value) {
        this._count = value;
    }
    get pageTitle() {
        return this._pageTitle;
    }
    set pageTitle(value) {
        this._pageTitle = value;
    }
}
//# sourceMappingURL=category.model.js.map