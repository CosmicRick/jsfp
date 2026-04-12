//numbersandmath
const score = 400;// javasript autometically dectedt its number
const balance = new Number(600);// we define the variable as number 
console.log(score)
console.log(balance.toString());// we can use number veriables method like to string to convert number to string
console.log(balance.toString().length)// convert it into a string and give the lenmgth of the string
console.log(balance.toFixed(2))//remove all desimal value after the number present here 
const other_number = 123.921;
console.log(other_number.toPrecision(3));//after 3 value round of the number to an upper or lower one >.5 upper  and <.5 lower
// to local string is used for add , between numbers is different regioun format bydefault its a usa format but if we nnedd then we change them
let price = 1000000
console.log(price.toLocaleString());//by default
console.log(price.toLocaleString('en-IN'));// indean values
// -----------------------------------------------------------------------------------------------------------------------------------------------------------//
//Math library
console.log(Math);// math is a build in library in java script Perform math Function like min max and pi or abs
console.log(Math.abs(-65))//convert negative values into positive values its also called absolute values 
console.log(Math.round(43.8576))//round of the number
//if we try control of the round value
console.log(Math.ceil(43.2))//heigclehts number
console.log(Math.floor(43.8576))//lowest number
console.log(Math.random())//print a random value form 0 to 1
console.log((Math.random() * 10) + 1)// get a hole number between 0 to 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)