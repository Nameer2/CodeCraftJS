// ------------------------- for in -----------------------------------
//object

const obj = {
    game:'pubg',
    game1:'freefire'

}// for of does not work in object
for (const key in obj) {
 console.log(`${key} is ${obj[key]}`);  
}

//array

const programming = ["js", "rb","cpp" ]
for (const key in programming) {
    console.log(programming[key]);
}

// map

const map = new Map()
map.set('pak',"pakistan")
map.set('in',"india")
map.set('aus',"australia")
console.log(map);

for (const key in map) {
    console.log(key);
    
}