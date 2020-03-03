var UserModel = /** @class */ (function () {
    function UserModel(name, email, username, phone, password) {
        this._name = name;
        this._email = email;
        this._username = username;
        this._phone = phone;
        this._password = password;
    }
    Object.defineProperty(UserModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "rePassword", {
        get: function () {
            return this._rePassword;
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
}());
export { UserModel };
//# sourceMappingURL=user.model.js.map