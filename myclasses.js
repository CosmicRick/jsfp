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
console.log(deep.changeusername());
//new class 

class admin{
    constructor(dbpass, name, stats) {
        this.dbpass = dbpass
        this.name = name 
        this.stats = stats
    }
    changedppass(dbpass, name, stats) {
        return `${this.dbpass} changed password\n
        Admin : ${this.name}\n 
        status : ${this.stats}`   
    }
    
}
const passchange = new admin('deep9898@gddt' , 'cosmicrick', 'changed')
console.log(passchange.changedppass())

