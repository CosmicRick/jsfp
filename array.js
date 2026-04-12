const my_array = [1, 2, 3, 4, 5];
console.log(my_array)
console.log(my_array.length)
let myarr = new Array('Hitesh sir' + 'guruji')
console.log(myarr)
//method
my_array.push(8)
console.log(my_array)
my_array.pop()
console.log(my_array)
my_array.unshift(5)
console.log(my_array)
my_array.shift();
console.log(my_array)
//JavaScript question methods
console.log(my_array.includes(8))// returns false because its does not exist on the array
console.log(my_array.indexOf(9))//-1 because not exist in the array
console.log(my_array.indexOf(3))// return the index value
//slice and splice
const newarray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log("A ", newarray)
const mna1 = newarray.slice(1,3)
console.log(mna1)
console.log("B ",  newarray)
const mna2 = newarray.splice(1,3)
console.log(mna2)
console.log("c ",  newarray)
// part 2 of arrays 
const marvel_heros = ["Thor","Ironman","Spiderman"]
const Dc_Heros = ["Batman","Flash","Superman"]
marvel_heros.push(Dc_Heros);// its create array in under an array so we can face problem to access the array
console.log(marvel_heros);
console.log(marvel_heros[3][1])//print flash
// solve the problem we  use spread operator
const new_array = [...marvel_heros , ...Dc_Heros]
console.log(new_array);
console.log(new_array[4])
//convert any datatype to an array using .is array and From methods
console.log(Array.from("India"))//convert String Into an array
console.log(Array.isArray(["England"]))// check its a array or not if not return false