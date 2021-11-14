function typeWriteR(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = ''
    textArray.forEach((letra, i) => {
        setTimeout(function(){
            element.innerHTML += letra
        }, 80 * i)
    })
}

const title = document.querySelector('.mainTitle');
typeWriteR(title)
