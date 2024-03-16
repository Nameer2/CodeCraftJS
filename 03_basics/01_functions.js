function add(num1,num2){
    console.log(num1+num2); 
}
const result = add(4,7)
//console.log(result); // output is undefined

//---------------------------------------------------------------------------------//

function add2(num1,num2){
    let result = num1+num2
    return result
}
const result1 = add2(4,6)
console.log("reesult: " ,result1);

//------------------------------------------------------------------------------------//

function login(userName){
    if (userName===undefined) {
        console.log("please enter username");
        return
    }
    return `${userName} just logged in`
}

console.log(login("nameer"));

