function SetUsername(username) {
    this.username = username
}
function createuser(username, email, password) {
    SetUsername.call(this,username)
    this.email = email
    this.password = password
}
const nameer = new createuser ("nameer","nameer@gmail.com",123)
console.log(nameer);