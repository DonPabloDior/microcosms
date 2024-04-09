let icon = document.getElementById('nav-icon3')
let navbar = document.querySelector('.navbar')
let nav_units = document.querySelector('.nav_units')
let nav_button = document.querySelector('.nav_button')


icon.addEventListener('click',()=>{
    icon.classList.toggle('open')
    navbar.classList.toggle('act_nvb')
    nav_units.classList.toggle('act_nu')
    nav_button.classList.toggle('act_bu')
})