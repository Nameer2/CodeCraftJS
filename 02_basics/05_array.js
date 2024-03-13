const friends = ["hanzala","ahmed","shameer"]
const friends2 = ["sami","rafay","umer"]

//const allfriend = friends.concat(friends2) //friends.push(friends2)//we also use push in place of push
//console.log(allfriend);
//console.log(allfriend[3][2]);


// we also use spread instead of concat

const allfriend = [...friends,...friends2]
console.log(allfriend);


const another_array= [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const newarray = another_array.flat(2) // flat make the above array one array its output is [1,2,3,4,5,6,7,8,9,110,11]
//and the 2 tell us how many time we have to open inside array we use infinity if we dont know how many times we have to do
console.log(newarray);



console.log(Array.isArray("nameer"));
console.log(Array.from("nameer"));
console.log(Array.from({name:"nameer"}));//Return empty string 


let value1=100
let value2=200
let value3=300
console.log(Array.of(value1,value2,value3));