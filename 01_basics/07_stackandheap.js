// there are two types of memory tack and heap
//stack(primitive)
//heap(non primitive)

// Stack(Primitive),
let name="nameer"
let name1=name
name1="shahid"
console.log(name)
console.log(name1)
//Heap(Non-Primitive)
const obj={
    name:"nameer",
    age:19,
    email:"nameer@gmail.com"

}
 const obj1=obj
 obj1.name="shahid"
 console.log(obj.name)