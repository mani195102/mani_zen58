// copy by value

var myAge = 29;
var myFriendAge = myAge;

console.log("My Age is:", myAge);
console.log("My FriendAge is:", myFriendAge);

myFriendAge = myFriendAge - 1;

console.log("My Age after:", myAge);
console.log("My FriendAge after:", myFriendAge);

// copy by reference

var myToyBox = {toy:"car"};
var friendToyBox = myToyBox;

console.log("My Toy is:", myToyBox.toy);
console.log("My FriendAge is:", friendToyBox.toy);

myToyBox.toy = "Doll";

console.log("My Toy after:", myToyBox.toy);
console.log("My FriendAge after:", friendToyBox.toy);


var address = ["84","kaliamman street","Madurai"]
console.log("Array address :",address[0],address[1],address[2],);

var addressNew ={
  Door_no:-"84",
  Area:"kaliamman st",
  city:"Madurai"
 };
 console.log("Object address :",addressNew["Door_no"],addressNew["Area"],addressNew["city"]);

