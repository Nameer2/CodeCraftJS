
// ++++++++++ NUMBERS +++++++++++ // 

const num=new Number(100.5689)
const num1=new Number(100000000)
console.log(num);

console.log(num.toPrecision(4));//it returns value in string 
//console.log(num1.toLocalstring());


// +++++++++++++ MAths ++++++++++ //

console.log(Math); 

//Some Mathematical constants
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.E);

//Some Mathematical Functions

console.log(Math.abs(-5));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.9));
console.log(Math.round(6.8));
console.log(Math.min(8,9,4,5,2));
console.log(Math.max(20,34,56,78));
// Math.random 0=>1

console.log(Math.random()); //gives random value
console.log(Math.floor((Math.random()*10)+1));


const max=1
const min=6
console.log(Math.floor((Math.random()*(max-min+1))+min));