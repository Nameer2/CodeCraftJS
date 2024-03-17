//if

const login = true
const temp=41
if (temp<50) {
    console.log("temprature is less than 50");
}
else{
    console.log("temprature is greater than 50");
}


const balance = 1000

//if (balance>500) console.log("test"),
//console.log("test2");    dont use this

if (balance < 500) {
    console.log("balance is less than 500");
}
else if (balance < 750) {
    console.log("balance is less than 750");
}
else if (balance < 900) {
    console.log("balance is less than 900");
}   
else{
    console.log("balance is greater than 899");
}


const userlogin = 1
const debitcard = true

if (userlogin && debitcard) {
    console.log("allowed");
}
