var SettingsModel = /** @class */ (function () {
    function SettingsModel(id, title, imageUrl1, imageUrl2, imageUrl3) {
        this._id = id;
        this._title = title;
        this._imageUrl1 = imageUrl1;
        this._imageUrl2 = imageUrl2;
        this._imageUrl3 = imageUrl3;
    }
    Object.defineProperty(SettingsModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsModel.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsModel.prototype, "imageUrl1", {
        get: function () {
            return this._imageUrl1;
        },
        set: function (value) {
            this._imageUrl1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsModel.prototype, "imageUrl2", {
        get: function () {
            return this._imageUrl2;
        },
        set: function (value) {
            this._imageUrl2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsModel.prototype, "imageUrl3", {
        get: function () {
            return this._imageUrl3;
        },
        set: function (value) {
            this._imageUrl3 = value;
        },
        enumerable: true,
        configurable: true
    });
    return SettingsModel;
}());
export { SettingsModel };
//# sourceMappingURL=settings.model.js.map