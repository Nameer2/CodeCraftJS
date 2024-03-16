const user={
    username : "Nameer",
    price: 888,
    msg: function () {
      console.log(`${this.username}, welcome`); 
      console.log(this);       
    }

}
//user.msg()

//---------------------------------- this in function--------------------------------------


function hello(){
    const name = "nameer"
    console.log(this.name);//output is undefined
}//we use this only in object it deosn't work on function
hello()

// --------------------------------------- Arrow Function -----------------------------------
 
const add =(num1,num2) => {
     return num1+num2 
}
console.log(add(4,5));

const add1 =(num1,num2) => ( num1+num2 )

console.log(add1(4,5));
// NOTE: (Return not allowed) and {return can be use}

