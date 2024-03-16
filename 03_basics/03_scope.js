// {} is known as scope

if(true){
    let a = 10
    const b = 20
    var c = 30
}
//console.log(a); it gives error because it  inside the scope( let and const) but var give value outside
//console.log(b);
console.log(c);

//-------------------
let a = 50
if(1){
    let a =23
    console.log("inner",a);
}
console.log("outer",a);