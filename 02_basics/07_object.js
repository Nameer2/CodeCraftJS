const obj=new Object()//Singleton
console.log(obj);//Empty Object {}
const obj1={}//Non Singleton
obj1.id="12345"
obj1.name="nameer"
console.log(obj1);

// double object
const obj2={
    email:"nameer@gmail.com",
    fullName:{
        userName:{
            firstName:"Nameer",
            lastname:"Shahid"
        }
    },
    password:123
}
console.log(obj2.fullName.userName.firstName);


const obj4={a:'1',b:'2'}
const obj5={c:'3',d:'4'}
const obj6={e:'5',f:'6'}
//const obj7=Object.assign(obj4,obj5,obj6)// all data of obj 5 and 6 is stored in obj4
//console.log(obj7);
//console.log(obj4===obj7);//true,This mean all other source objects are stored in obj4

//const objall=Object.assign({},obj4,obj5,obj6)
//console.log(obj4===objall);//false,all source objects are stored in empty string

const obj8 = {...obj4,...obj5} // spread function it is used to merge array or objects 
console.log(obj8);

const user=[
    {a:'1'},{b:'2'},{c:'3'}
]
console.log(user[1].b)
console.log(Object.keys(obj2))
console.log(Object.values(obj2))
console.log(Object.entries(obj2))

