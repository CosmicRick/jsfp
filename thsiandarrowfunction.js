//this keyword is used for accessing current schope in an object like this 
const myobj = {
  name: "dipto",
  age: 24,
  work: "unemployed",
  Scheme: "Yuba shati",
  called: function getinfo() {
    return (`Applicant name is ${this.name} and scheme name is ${this.Scheme}`)
  }
}
myobj.name = "Suman"
console.log(myobj.called())
console.log(this)//its return empty object because its on node environment 
function java() {
  console.log(this)
}
java()
//arrow function syntax explesit return 
const value = () => {
  let name = "Supradip Roy"
  console.log(name)
}
value()
//arrow function using implisit return
const number = (num1, num2) => (num1 + num2)
console.log(number(65, 86))
//print an object using arrow function 
const objvalue = () => ({ name: "deepda", id: 672 })
console.log(objvalue())
