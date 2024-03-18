const coding = ["js","cpp","python"]

/*coding.forEach(  function (index) {
    console.log(index);
}  )*/
  
// using arrow function
/*
coding.forEach((index) => {
    console.log(index);
})*/

function print (item){
    console.log(item);
}
coding.forEach(print)


const mycode = [
    {
        name:"nameer",
        fathername: "shahid"
    },
    {
        uni:"university of education",
        semester : "2"
    },
    {
           language:"english"
    }

]

mycode.forEach( (item) => {
    console.log(item);
})