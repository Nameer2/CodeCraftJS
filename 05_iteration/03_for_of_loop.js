// for of loop
//array

let arr =[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}
const greetings = "hello world"
for (const greet of greetings) {
    if (greet == " ") {
        continue   
    }
    console.log(greet);
}

//maps
const map = new Map()
map.set('pak',"pakistan")
map.set('in',"india")
map.set('aus',"australia")
console.log(map);

for (const [key,value] of map) {
    console.log(key,":-",value);
    
}

// dont use in obj

