/* falsy value
false,0,-0,bigint on, " ",null undefined,nan

truthy value
true , 1 , [] ,"0" , " ", {}, function (){} */

// nullish coalescing operaator (??)null undefined

let val1
val1 = null ?? 10
console.log(val1);//output is 10
let val2 = 10 ?? 5
console.log(val2);//output is 10

//terniary operator
//condition ? true:false

const price =100
price <= 80 ? console.log("less than 80"): console.log("more than 80")