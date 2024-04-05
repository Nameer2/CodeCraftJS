let myname = "Nameer    "
//console.log(myname.truelength);

let heroes = ["thor","spiderman"]
let power = {
    thor: "hammer",
    spider : "sling",
    getpower: function(){
        console.log(`power of spider is ${this.spider}`);
    }
}
Object.prototype.Nameer = function(){
console.log(`nameer is present in all objects`);
}
Array.prototype.hey = function(){
    console.log("hello Nameer");
}
//power.Nameer()
//heroes.Nameer()

//power.hey()



// ------------------------------- inheritance --------------------------------


const user= {
    name:"Nameer"
}

const teacher = {
    makeVideo: true
}
const support ={
    isAvaliable:false
}
const taSupport={
    makeAssignment:'js',
    fullTime: true,
    __prototype__:support
}
teacher.__prototype__ =  user

// modern syntax

Object.setPrototypeOf(taSupport,user)


//----------------------------------------


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Nameer".trueLength()
