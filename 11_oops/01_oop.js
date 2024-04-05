//---------------------object literl-------------------
const user = {
    username: "nameer",
    email: "nameer@gmail.com",
    getdetail: function(){
        //console.log(`username: ${this.username}`)
        console.log(this);
    }
}
//console.log(user.username);
//console.log(user.getdetail());

//------------------- constructor function ---------------
// new keyword make new empty object
// new keyword called function constructor
// new keyword add this in it
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    
    }

    return this
}

const userOne = new User("Nameer", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)

console.log(userOne.constructor);
//console.log(userTwo);