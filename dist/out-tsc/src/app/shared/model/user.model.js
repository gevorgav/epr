export class UserModel {
    constructor(name, email, username, phone, password) {
        this._name = name;
        this._email = email;
        this._username = username;
        this._phone = phone;
        this._password = password;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get username() {
        return this._username;
    }
    get phone() {
        return this._phone;
    }
    get password() {
        return this._password;
    }
    get rePassword() {
        return this._rePassword;
    }
}
//# sourceMappingURL=user.model.js.map