// make function alive
//normal function 
function valucalled() {
  console.log("Rick")
}
valucalled();
function sumofnum(number1, number2) {
  console.log(number1 + number2)
}
sumofnum(5, 8)
//creating a function that logndin people and print welcome message
function checkLogin(username) {
  if (!username) {
    console.log("Pleace enter a username")
    return
  }
  return `welcome to the page ${username}`
}
console.log(checkLogin("Cosmicrick"))
arr1 = [1, 84, 64, 754, 74]

for (let i = 0; i < arr1.length; i++) {
  console.log(`yours values is ${i}`)
}
//shoping card 
//we use dynamic value pass in funcion using rest oprator(...)
//rest oprator accept all argument in a single parameter 
function getitemcard(...value1) {
  return value1;
}
console.log(getitemcard(599, 766, 764, 488))
function getshoppingcard(value1, value2, ...statement1) {
  return value1;
}
console.log(getshoppingcard(599, 766, 488))
//access object in a function
let obje1 = {
  name: "Deep",
  age: 54,
  place: "kolkata",
  Outh: "Google"
}
let obje2 = {
  name: "argadeep",
  age: 23,
  place: "Darjeeling",
  Outh: "Github"
}
function getobject(items) {
  return (`welcome ${items.name}\n \t and your place is ${items.place} Outh provider are ${items.Outh} `)
}
console.log(getobject(obje1))
console.log(getobject(obje2))
