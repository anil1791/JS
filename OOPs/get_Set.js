const User = {
  _email: "abc@gmail.com",      //private properties
  _password: "abc123",          //private properties
  get email() {
    return this._email.toLocaleUpperCase();
  },
  set email(val) {
    this._email = val;
  },
  get password() {
    return this._password.toLocaleUpperCase();
  },
  set password(val) {
    this._password = val;
  },
};

const tea = Object.create(User);
tea.password = "vbcaa234";
console.log(tea.password);
