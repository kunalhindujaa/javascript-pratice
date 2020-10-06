//Creating Prototype
function User(name, email) {
  this.name = name;
  this.email = email;
  this.isRegistered = false;
}

//Adding functions
User.prototype.register = function () {
  this.isRegistered = true;
  console.log(this.name + " with email id " + this.email + " is registered.");
};

//Prototype Inheritance
function Admin(...args) {
  User.apply(this, args);
  this.role = "admin";
}

//Inherting functions of User to Admin
Admin.prototype = Object.create(User.prototype);

//Creating objects
var userOne = new User("Kunal", "abc@gmail.com");
var userTwo = new User("Neha", "xyz@gmail.com");
var admin = new Admin("Kapil", "pqr@gmail.com");

console.log(admin);

//Note:
//1. We can add properties and new functions to the prototype which wasn't possible when we were using Constructors.
//2. We should keep functions seprate, e.g. register() and not in Prototype object creation template because
//using the prototype makes for faster object creation, since that function does not have to be re-created each time a new object is created.

/*
Also instead of adding multiple properties for a single prototype individually, This way we are changing a prototype to a new object and adding properties all at once

Bird.prototype = {
numLegs: 2,
eat: funcion(){
console.log("I like to eat bird food");
}
};
*/

/*
Own Properties and Prototype Properties

function Bird(name) 
{
  this.name = name; // Here name is 'Own Property'
}

Bird.prototype.numLegs = 2; // Here numLegs is 'Prototype Property'
*/
