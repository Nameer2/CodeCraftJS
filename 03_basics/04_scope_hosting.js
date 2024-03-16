function one(){
    const name = "Nameer"
    function two(){
        const website = "instagram"
        console.log(name);
    }// child function access parent function 
     // console.log(website); we cant acees website becaue it is inside of scope
    two()
}
one()

//----------------------------------------------------------------------

if (true) {
    const name = "nameer"
    if(name === "nameer"){
        const fullname= " shahid"
        console.log(name + fullname);
    }
    
}

// --------------------- intresring ------------------

const add = function (num){
    return num+1
}
console.log(add(5)); 