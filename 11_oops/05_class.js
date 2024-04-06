//ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
}

const nameer = new User("Nameer","Nameer@gmail.com","123")
console.log(nameer.encryptPassword());

