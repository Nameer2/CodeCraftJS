//arrays

const arr = [0,1,2,3,4,5,6] //you can also write string , boolean(true) in array etc
console.log(arr[5]);

// methods of array

arr.push(7) //add 7 in end of array
arr.pop()   //removes last value of array
arr.unshift(8) //it insert value in atart of array

console.log(arr.includes(5)); // it tells is the number is in array
console.log(arr.indexOf(4)); //it tell index of value


const newarr = arr.join() // convert in string
console.log(arr);
console.log(newarr);

 // slice , splice

 //Slice : Return a copy of an Array 
//        Last index`s element will not be included 

const array=[0,1,2,3,4,5,6]
console.log("origanal array",array);
const myarr=array.slice(1,3)
console.log("Array After slice()", myarr);

//Splice : Remove Elements from an array 
//          Last index`s will be included

const myarr1=array.splice(1,3)
console.log("origanal array",array);
console.log("Array After splice()", myarr1);
