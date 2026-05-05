class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptpassword(password){
        return `${this.password }abs`
    }
    changeusername(username){
        return `${this.username.toUpperCase()}`
    }
}
const deep = new user('cosmicdeep', 'deep@gmail.com', 'hellodeep8989056' )
console.log(deep)
console.log(deep.encryptpassword());
console.log(deep.changeusername( ));

