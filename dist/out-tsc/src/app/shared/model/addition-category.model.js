export class AdditionCategoryModel {
    constructor(id, name, multiSelect, additions) {
        this._id = id;
        this._name = name;
        this._additions = additions;
        this._multiSelect = multiSelect;
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
    get additions() {
        return this._additions;
    }
    set additions(value) {
        this._additions = value;
    }
    get multiSelect() {
        return this._multiSelect;
    }
    set multiSelect(value) {
        this._multiSelect = value;
    }
}
//# sourceMappingURL=addition-category.model.js.map