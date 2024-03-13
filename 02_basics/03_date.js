let date = new Date() // date type is object
  

//methods to show date//


console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());

// to set your own date

let mydate = new Date(2004, 11 ,27) //index start from 0 t0 11
console.log(mydate.toDateString());

let timestamp = Date.now() // it can also write as new date
console.log(timestamp)

console.log(mydate.getTime()); //gives time from my date to tahe presnt date in mili seconds
console.log(mydate.getDay());//sunday is 0 and saturday is 6


let newdate = new Date()
console.log(newdate.getMonth());

newdate.toLocaleString('default',{
   weekday:"long" , 
   year: "numeric"  
})
console.log(newdate)