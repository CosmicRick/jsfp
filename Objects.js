//part 1 
//object using literals
const js_user = {
  name: "Rick",
  age: 22,
  gender: "male",
  email: "supradiproy737@gmail.com",
  isLogedin: false,
  lastlogin: ["Monday", "Wednesday"]
}
//accessing the object 1st way ---
console.log(js_user.name);
//2nd way to access an object use for print string key pair and json
console.log(js_user["email"] + " " + js_user["age"])
// use symbol as a key
const sym = Symbol("ptr1")
const obj = {
  [sym]: "ptr2"
}
console.log(obj[sym])
console.log(obj)
//change data using runtime 
js_user.email = "Supradip@gmail.com";
console.log(js_user["email"])
// Object.freeze(js_user);// for make object unchangeable
//accessing function as object value 
js_user.Gretting = function () {
  console.log(`Welcome to my application ${this.name} and you can change ${this.email}`)
}
console.log(js_user.Gretting())
//part 2 
//singleton
// const tinderuser = new Object()//its a singleton object
const tinderuser = {}
tinderuser.id = 1
tinderuser.name = "Deepto das"
tinderuser.isloggdin = false
console.log(tinderuser)
//we can declare object under an object --->>
const user = {
  id: 65,
  name: "Supradip",
  username: {
    fastname: "deep",
    lastname: "roy",
    userinfo: {
      algoout: "D.Roy"
    }
  }
}
//called the nested object call back hell
console.log(user.username.userinfo.algoout)// print using . operator
const obj1 = {
  1: "a",
  2: "b",
  3: "c",
}
const obj2 = {
  4: "d",
  5: "e",
  6: "f",
}
const obj3 = Object.assign({},obj1,obj2)//used for object assign to a source to and new object {}  
console.log(obj3)
//or we can use spread operator ...
console.log(obj4={...obj1,...obj2})
//print and access object in an array
const db_valus = [
  {
    id : 6354,
    name : "deep  das",
    place: "Calcutta"
  },
  {
    id :6421,
    name: "kajal pal",
    place: "Bandel"
  }
]
console.log(`your name is ${db_valus[0].name} and place is ${db_valus[0].place}` )
console.log(`your name is ${db_valus[1].name} and place is ${db_valus[1].place}` )
console.log(Object.keys(obj3))
console.log(Object.values(obj1))
console.log(tinderuser.hasOwnProperty('name'))
//for better way to print an object value 
const course ={
  coursename : "java with beans"
}
const {coursename} = course;
console.log(coursename)// its used in react an other places 

