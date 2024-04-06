class User {
    constructor(username){
    this.username=username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
    static createId(){
        return `123`
    }
}  

//const Nameer=new User("Nameer")
//console.log(Nameer.createId())

class Teacher extends User{
    constructor(username,email,password){
    super(username)
    this.email=email
    this.password=password
    }
}

const Nameer=new Teacher("Nameer","nameer@gmail.com","14");
Nameer.logMe()
console.log(Nameer.createId());