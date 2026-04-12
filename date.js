//date is a object in javascript 
Mydate = new Date();// cretate an object
console.log(Mydate)//date calculate in ms and calculate in january 1st 1970
// its not redable format
console.log(Mydate.toString())// create current date and time 
console.log(Mydate.toDateString())//print only date
console.log(Mydate.toISOString())//convert a Date object to an ISO 8601 formatted string 
console.log(Mydate.toJSON())// used for json suitable string forrmat
console.log(Mydate.toLocaleDateString())//print local date format
console.log(Mydate.toLocaleTimeString())//print local Time format
console.log(Mydate.toLocaleString())//local time and date format
Createddate = new Date(2023, 0, 14)
console.log(Createddate.toString())//create a custom date objecte
//custom date format
let Endddate = new Date("2004-06-30")
console.log(Endddate.toLocaleString())
Mydaetr = new Date('06-30-2004')
console.log(Mydaetr.toLocaleString())
//timeStamps
let myTimeStamp = Date.now()
console.log(myTimeStamp)//output in ms
console.log(Math.floor(myTimeStamp / 1000))//Time is second
//to local string use
console.log(myTimeStamp.toLocaleString('default', {
  weekday: 'long'
}))

