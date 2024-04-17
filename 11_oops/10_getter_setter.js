class user{
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()   
    }
    set password(value){
         this._password=value
    }
    get email(){
        return this._email  
    }
    set email(value1){
         this._email=value1.toUpperCase()
    }
}

const obj = new user("nameergmail.com",'abc')
console.log(obj.password);
console.log(obj.email);


// ----------------------------- old method --------------------------------------------  //
/* function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const nameer = new User("chai@chai.com", "chai")

console.log(nameer.email);*/


// ----------------------------------- in objects ----------------------- //

/*const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const obj = Object.create(User)
console.log(obj.email);*/