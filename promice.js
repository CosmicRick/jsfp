const promiseone  = new Promise (function(resolve, reject){
 // do an async task
 //Db calls 
 //netwok calls
 setTimeout(()=>{
    console.log('Async task is complete')
    resolve()// connecting resolve with then function
 },1000)
})  //avalable in es6
promiseone.then(()=>{
    console.log('promised consumed');
})

new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('promse created')
        resolve()
    },2000)
}).then(() => {
    console.log('promise Cosumed');    
})
//data  pass on using promise 
const promisefour = new Promise((resolve, reject)=>{
    setTimeout(() =>{
      console.log('api called');
      resolve({name: 'supradip' ,
        place : "kolkata"
      })
    },4000)
})
promisefour.then((data) => {
    console.log(data.place)
})

let mydata = new Promise ((resolve, reject)=>{
      let error = true ; 
      if(!error){
            setTimeout(() =>{
      console.log('api called');
      resolve({name: 'supradip' ,
        place : "kolkata"
      })
    },1000)
      }
      else{
        reject('E: error occur in data');
      }
})
mydata.then((value)=>{
    return value.name;
}).then((name)=>{
   console.log(name);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('over');
})
