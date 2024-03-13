
const mysym= Symbol("key1")
const object = {
    name:"nameer",
    "full name" : "Nameer Shahid",
    age: 18,
    [mysym]:"key" ,//declaration of symbol datatyoe
    email: "nameershahid15@gmail.com",
    isloggedin: false,
    lastlogin:["monday","saturday"]
}
 // methods to call object


console.log(object.name);
console.log(object["age"]); 
console.log(object["full name"]);
console.log(object[mysym]);

//console.log(object.full name); // we can not acess full name with this metho

object.email = "nameer.ca" // you can change information
console.log(object.email);

// ------------ function ---------------//
object.greeting = function(){
    console.log("hello World");
}
console.log(object.greeting());

//------------------function in which object is passed ---------------------

object.greetingtwo = function(){
    console.log(`hello ${this.name}`);
}
console.log(object.greetingtwo());