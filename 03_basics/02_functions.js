function calculateCartPrice(val1,val2,...num1) // first two  value stored in va1 and val2 other all stored in num1
 {
    return num1
    
}
console.log(calculateCartPrice(200,400,600,2,45,67,89));

// pass object in function

const user ={
    name: "nameer",
    price: 999
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}
handleObject(user)

// pass array in function

const arr =[200,300,800]

function returnSecondValue(arr) {
    return arr[2]
    
}
console.log(returnSecondValue(arr));
