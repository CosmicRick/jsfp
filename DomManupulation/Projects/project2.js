document.addEventListener('submit', (e) =>{
    e.preventDefault()
    const username = document.querySelector('.uname').value
    const password  = document.querySelector('#password').value
    const show = document.querySelector('#error')
    if(username == '' || username == NaN && password == '' || password == NaN  || password < 8 ){
        show = 'not approved'
    }
    else{
        show = 'approved'
    }
})
