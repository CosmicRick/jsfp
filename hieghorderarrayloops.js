//for of (for key of object)
const att = [1, 2, 3, 4, 5]
//itrate the valuse 
for (const num of att) {
  console.log(num)
}
//maps qunice and maintain order and it is not giving any output for loop oprations 
const map = new Map();
map.set('IN', 'India',)
map.set('SW', 'Swizerlan',)
map.set('BD', 'bangladesh',)
map.set('AG', 'Afganisthan',)
console.log(map)
for (const key of map) {
  console.log(key)//returns array
}
//array distructering
for (const [key, value] of map) {
  console.log(value)//returns values
}
//object is not ittreable in this for of loops 
// for in loops for object (for key in object)
//its also usend in array but returns only index and we nned to convert them into valus 
let myobj = {
  name: "deep",
  place: "Kolkata"
}
for (const key in myobj) {
  console.log(`appllicants ${key} is ${myobj[key]}`)
}
myobj.name = "Cosmicrick";
myobj.place = "Boinchi";
for (const key in myobj) {
  console.log(`appllicants ${key} is ${myobj[key]}`)
}
//uses for each loops [its also give index an hole]
let myarray = ['makaut', 'cu', 'jadavpur', 'kalyani', 'Durgapur']
myarray.forEach((Universites) => {
  console.log(Universites)
})
let iNdex = [
  {
    Name: 'arshi No',
    place: "Nalpur",
  },
  {
    Name: 'CosmicRick',
    place: 'Boinchi'
  },
  {
    Name: 'Deepto',
    place: 'Bandel'
  }
]
iNdex.forEach((items) => {
  console.log(`hello ${items.Name} Your Home region is ${items.place}`)
})
// for each dont return any value 
let values = myarray.forEach((items) => {
  console.log(items)
  return items
})
console.log(values)
// maps filter and reduse 
//filter dosen reruen any itsm or function
let mtarray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
let output = mtarray.filter((value) => value >= 50)
console.log(output)
//maps return items 
console.log(mtarray.map((items) => {
  if (items > 50) {
    return items * 2
  }
  else {
    return items * 3
  }
}))
//map  chaining methods
console.log(mtarray.map((items) => (items * 10)).map((value) => (value + 1)))
//reduse method shopping card total bill 
let course_card = [
  {
    course_name: 'javascript',
    price: 1000
  },
  {
    course_name: 'cpp',
    price: 5000
  },
  {
    course_name: 'Backned',
    price: 2000
  },
  {
    course_name: 'androad devlopment',
    price: 8000
  }
]
let bill = course_card.reduce((acc, cpp) => (acc +cpp.price),0)
console.log(bill)