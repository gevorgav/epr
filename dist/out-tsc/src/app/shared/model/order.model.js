export class OrderModel {
    constructor(startDate, endDate, userId, zipCode, orderItems, id) {
        this._id = id;
        this._startDate = startDate;
        this._endDate = endDate;
        this._userId = userId;
        this._zipCode = zipCode;
        this._orderItems = orderItems;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
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
    get userId() {
        return this._userId;
    }
    set userId(value) {
        this._userId = value;
    }
    get zipCode() {
        return this._zipCode;
    }
    set zipCode(value) {
        this._zipCode = value;
    }
    get orderItems() {
        return this._orderItems;
    }
    set orderItems(value) {
        this._orderItems = value;
    }
    get shipping() {
        return this._shipping;
    }
    set shipping(value) {
        this._shipping = value;
    }
}
//# sourceMappingURL=order.model.js.map