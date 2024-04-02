/*const promiseone = new Promise(function(resolve,reject){
    setTimeout(function(){
     console.log('async task is complete');
     resolve()
    },1000)
})

promiseone.then(function(){
    console.log('promise consumed');
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve();
    },1000)
}).then(function(){
console.log('resolved');
})


const promiseThree = new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve({username:"Nameer", email:"nameer@gmail.com"})
      }, 1000);
})

promiseThree.then(function(user){
console.log(user);
})


const promisefour= new Promise(function(resolve,reject){
setTimeout(function(){
    let error = false
if(!error){
    resolve({username:"nameer",password:123})
}
else{
    reject('ERROR : something went wrong')
}
},1000)
})
promisefour
.then(function (user) {
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('promise is either resolved or rejected');
})*/

const promisefive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
    if(!error){
        resolve({username:"javascript",password:246})
    }
    else{
        reject('ERROR : js went wrong')
    }
    },1000)
    
})

async function consumepromisefive(){
    try {
        const response = await promisefive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumepromisefive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
