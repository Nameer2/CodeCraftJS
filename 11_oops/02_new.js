function multiply(num) {
    return num * 5
}
multiply.power = 2

console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);



function user(username, score) {
    this.username = username
    this.score = score
}
user.prototype.increment = function(){
    this.score++
}
user.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}


const user1 = new user("nameer",50)
const user2 = new user("hanzla",49)
user1.increment()
user1.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype
property of the constructor function. This means that it has access to properties 
and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments
and this is bound to the newly created object. If no explicit return value is specified 
from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return 
a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/