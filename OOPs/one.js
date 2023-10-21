const obj = {
  name: "Anil",
  password: 123,
  getPassword: function () {
    return this.password;
  },
};

// console.log(obj.getPassword());


function User(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  return this;
}

// constructor function :- new

const userone = new User("Anil",32,'M')
const usertwo = new User("Pakhi",32,'F')

console.log(userone);
console.log(usertwo);
