const btnRes = document.getElementById('btnRes');
const nav = document.getElementById('navbar');
const section = document.getElementsByTagName('section')[0]
function menu(){
    nav.classList.toggle('active')
    if(btnRes.innerHTML == 'Fechar'){
        btnRes.innerHTML = 'Menu'
    section.style.opacity = '100%'
    }else{
        btnRes.innerHTML = 'Fechar'
    section.style.opacity = '30%'

    }
    btnRes.classList.toggle('btnActive')
}

btnRes.addEventListener('click',menu)