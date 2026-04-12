let body = document.querySelector('body')
let buttons = document.querySelectorAll('button')
buttons.forEach(function(b){
  b.addEventListener('click',  function(e){
    console.log(e.target)
    if(e.target.id === 'gray'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'black'){
      body.style.backgroundColor  = e.target.id
    }
  if(e.target.id === 'Blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'Purple'){
      body.style.backgroundColor = e.target.id
    }
  })
})
//switch case use 
