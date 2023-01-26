const User = require('./user');

require('./user');

class userBase {
  constructor(users) {
    this.users = users
  }

  count() {
    return this.users.length
  }

  getNames() {
    return this.users
  }

  getIntroductions() {
    return this.users.map((user) =>
      "Hi, my name is " + user.name
    )
  }
}

const my_names = [new User('Uma'), new User('Josh'), new User('Ollie')];

const my_userBase = new userBase(my_names);

console.log(my_userBase.count());
console.log(my_userBase.getNames());
console.log(my_userBase.getIntroductions());


