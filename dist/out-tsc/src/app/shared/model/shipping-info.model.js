export class ShippingInfoModel {
    constructor(id, name, street, phone, email, specialInstructions, zipCode, products, isPayed, isShipped, user, createdAt, startDate, endDate, payed, productCount, orderItems, stairs, setUpSurfaces) {
        this._name = name;
        this._street = street;
        this._phone = phone;
        this._specialInstructions = specialInstructions;
        this._zipCode = zipCode;
        this._products = products;
        this._isPayed = isPayed;
        this._isShipped = isShipped;
        this._user = user;
        this._id = id;
        this._createdAt = createdAt;
        this._startDate = startDate;
        this._endDate = endDate;
        this._payed = payed;
        this._productCount = productCount;
        this._email = email;
        this._orderItems = orderItems;
        this._stairs = stairs;
        this._setUpSurface = setUpSurfaces;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get street() {
        return this._street;
    }
    set street(value) {
        this._street = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    get specialInstructions() {
        return this._specialInstructions;
    }
    set specialInstructions(value) {
        this._specialInstructions = value;
    }
    get zipCode() {
        return this._zipCode;
    }
    set zipCode(value) {
        this._zipCode = value;
    }
    get products() {
        return this._products;
    }
    set products(value) {
        this._products = value;
    }
    get isPayed() {
        return this._isPayed;
    }
    set isPayed(value) {
        this._isPayed = value;
    }
    get isShipped() {
        return this._isShipped;
    }
    set isShipped(value) {
        this._isShipped = value;
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get createdAt() {
        return this._createdAt;
    }
    set createdAt(value) {
        this._createdAt = value;
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(value) {
        this._startDate = value;
    }
    get endDate() {
        return this._endDate;
    }
    set endDate(value) {
        this._endDate = value;
    }
    get payed() {
        return this._payed;
    }
    set payed(value) {
        this._payed = value;
    }
    get productCount() {
        return this._productCount;
    }
    set productCount(value) {
        this._productCount = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get orderItems() {
        return this._orderItems;
    }
    set orderItems(value) {
        this._orderItems = value;
    }
    get stairs() {
        return this._stairs;
    }
    set stairs(value) {
        this._stairs = value;
    }
    get setUpSurface() {
        return this._setUpSurface;
    }
    set setUpSurface(value) {
        this._setUpSurface = value;
    }
}
//# sourceMappingURL=shipping-info.model.js.map