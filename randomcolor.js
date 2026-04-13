let changeclolor = function(){
    let hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0;i < 6 ; i++){
      color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
function background(){
    document.body.style.backgroundColor = changeclolor()
}
let Create;
let startInterval = function(){
    Create = setInterval(background, 2000)
}
let stopInterval = function(){
    clearInterval(Create)
}
document.querySelector('#start').addEventListener('click', startInterval)
document.querySelector('#Stop').addEventListener('click',stopInterval)