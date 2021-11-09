const btnMobile = document.getElementById('btn-mobile')
const quem = document.getElementById('quemSomosButton')
const oqFazemos = document.getElementById('oqFazemosButton')
const services = document.getElementById('serviçosButton')
const contact = document.getElementById('contactUsButton')

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
services.addEventListener('click',toggleMenu)
contact.addEventListener('click',toggleMenu)