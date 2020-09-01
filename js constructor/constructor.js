// Constructor to create objects
function userDetails(name, id) {
  this.name = name;
  this.id = id;
}

//Creating new Objects
var firstUser = new userDetails("Kunal", "E0123");
var secondUser = new userDetails("Neha", "E0124");

document.getElementById("first").innerHTML =
  "User Name: " + firstUser.name + "\tUser Id: " + firstUser.id;
document.getElementById("second").innerHTML =
  "User Name: " + secondUser.name + " \n User Id: " + secondUser.id;

//Note: We can't add new properties and functions to the Constructor object like we used to add in an existing object.
