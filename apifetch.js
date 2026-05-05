async function apidata(){
    try{
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const response = await data.json()//conver the incomic data in json format and wait for data processing and arrival
    console.log(response)
    }
    catch(error){
       console.log('data error')
    } 
} 
apidata()

// async functions always return a Promise.
// await pauses execution until the Promise is resolved or rejected.
// Improves readability compared to .then() and .catch() chaining.
// Makes error handling simpler using try...catch.
// Ideal for managing complex asynchronous flows in a structured way.