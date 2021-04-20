export class DeliveryChartModel {
    constructor(id, city, price, $zipCodes, zipCodes, locationId) {
        this._id = id;
        this._city = city;
        this._zipCodes = zipCodes;
        this._price = price;
        this._locationId = locationId;
        this._$zipCodes = $zipCodes;
    }
    get $zipCodes() {
        return this._$zipCodes;
    }
    get id() {
        return this._id;
    }
    get city() {
        return this._city;
    }
    set zipCodes(value) {
        this._zipCodes = value;
    }
    get zipCodes() {
        return this._zipCodes;
    }
    get price() {
        return this._price;
    }
    get locationId() {
        return this._locationId;
    }
}
export class ZipCode {
    constructor(id, zipCode, location) {
        this._id = id;
        this._zipCode = zipCode;
        this._location = location;
    }
    get id() {
        return this._id;
    }
    get zipCode() {
        return this._zipCode;
    }
    set id(value) {
        this._id = value;
    }
    set zipCode(value) {
        this._zipCode = value;
    }
    get location() {
        return this._location;
    }
    set location(value) {
        this._location = value;
    }
}
//# sourceMappingURL=delivery-chart.model.js.map