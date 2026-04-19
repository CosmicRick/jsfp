document.querySelector('#Check').addEventListener('click', (e)=>{
    e.preventDefault()
    let users = (document.querySelector('#SerachBox')).value
const baseurl = `https://api.github.com/users/${users}`
const req = new XMLHttpRequest();
req.open('GET', baseurl)
req.onreadystatechange = function(){
    if(req.readyState === 4){
    let  data = JSON.parse(this.responseText)
    document.querySelector('.usershowcase').innerHTML = 
    `
    <img src = ${data.avatar_url}>
    <h3>${data.name}</h3>
    `
    }
}
    req.send()
})
