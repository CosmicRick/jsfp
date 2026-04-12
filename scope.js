//Hosting concept using scope of an function
one()
function one(){
  let username = "CosmicRick"
  function two(){
    let myvalue = 69        
    console.log(`the name is ${username} and the valus is ${myvalue}`)
  }
  two()
}
//different way to write this function 
const myob = function(num){
 return num + 2
}
console.log(myob(76))