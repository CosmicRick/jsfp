i = 701
if (i > 700) console.log("Executed");

const month = 24;
switch (month) {
  case 1:
    console.log("Month is january");
    break
  case 2:
    console.log("Month is february");
    break;
  case 3:// if we nned we use String here 
    console.log("Month is march")
    break;
  default:
    console.log("Moth is not decteted");
    break;  
}
//truthy and falsey oprator 
let isOuth = "Github";
 if(isOuth){
  console.log("Outhenticated")
 }
 else{
  console.log("Not outhenticated")
 }//assume empty string as false and if string is avalable is true 
