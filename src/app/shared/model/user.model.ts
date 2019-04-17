export class UserModel {
  private _name:string;
  private _email:string;
  private _username: string;
  private _phone: string;
  private _password: string;
  private _rePassword: string;
  
  constructor(name?: string, email?: string, username?: string, phone?: string, password?: string) {
    this._name = name;
    this._email = email;
    this._username = username;
    this._phone = phone;
    this._password = password;
  }
  
  get name(): string {
    return this._name;
  }
  
  get email(): string {
    return this._email;
  }
  
  get username(): string {
    return this._username;
  }
  
  get phone(): string {
    return this._phone;
  }
  
  get password(): string {
    return this._password;
  }
  
  get rePassword(): string {
    return this._rePassword;
  }
}
