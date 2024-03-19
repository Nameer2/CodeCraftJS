const num = [1,2,3]

//const sum = num.reduce(function(acc,cur){
 //   return acc+cur
//},0)
//console.log(sum);

const sum = num.reduce((acc,cur) => acc+cur ,0)
console.log(sum);


// --------------------- example -------------

const shopping = [
    {
        itemname: "js",
        price: 2999
    },
    {
        itemname: "python",
        price: 3999
    },
    {
        itemname: "c++",
        price: 4000
    },
    {
        itemname: "dsa",
        price: 19999
    }
]
const pricetopay= shopping.reduce((acc,item) => acc+item.price,0)
console.log(pricetopay);