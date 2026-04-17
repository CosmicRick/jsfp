document.querySelector('#Check').addEventListener('click', (e)=>{
    e.preventDefault()
    let users = (document.querySelector('#SerachBox')).value
    console.log(users)
const baseurl = `https://api.github.com/users/${users}`
const req = new XMLHttpRequest();
req.open('GET', baseurl)
req.onreadystatechange = function(){
    if(req.readyState === 4){
    let  data = JSON.parse(this.responseText)
    console.log(data)
    document.querySelector('.usershowcase').innerHTML = 
    `
    <img src = ${data.avatar_url} style="width: 14rem;">
    <h3>${data.name}</h3>
    `
    }
}
    req.send()
})
