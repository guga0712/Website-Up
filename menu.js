const btnMobile = document.getElementById('btn-mobile')
const quem = document.getElementById('quemSomos')
const oqFazemos = document.getElementById('oqFazemos')
const services = document.getElementById('services')

function toggleMenu(event){
    if (event.type==='touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)
quem.addEventListener('click',toggleMenu)
oqFazemos.addEventListener('click',toggleMenu)
services.addEventListener('click',toggleMenu)