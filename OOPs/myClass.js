/*class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword(password) {
    return `${this.password}abc`;
  }
}

const chai = new User("Anil", "anc@gmail.com", "123");

console.log(chai.encryptPassword());
*/

//behind the scene : if there was no class then we would have done this

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

const tea = new User("Anil", "anc@gmail.com", "123");

console.log(tea.encryptPassword());
