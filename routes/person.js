var express = require('express');
var router = express.Router();

function Person(body) {
  this.name = body.name;
  this.pets = body.pets || '';
  this.apples = 12;
}

Person.prototype.greet = function() {
  this.greeting = 'Hi ' + this.name + ', how are you?';
  return this.greeting;
};

Person.prototype.howManyApples = function() {
  return this.name + ' has ' + this.apples + ' apples';
};

Person.prototype.greetPet = function(pet) {
  return 'Hi ' + pet + ', YOU\'RE JUST SO FLUFFY! :O';
};

Person.prototype.greetPets = function() {
  var petGreeting = [],
      that = this;
  if (Array.isArray(this.pets)) {
    this.pets.forEach(function(pet) {
      petGreeting.push(that.greetPet(pet));
    });
  } else {
    petGreeting.push(that.greetPet(this.pets));
  }
  return petGreeting.join(' ');
};

router.post('/', function(req, res, next) {
  var _person = new Person(req.body);
  res.json({
    greeting: _person.greet(),
    apples: _person.howManyApples(),
    greetPets: _person.greetPets()
  });
});

module.exports = router;
