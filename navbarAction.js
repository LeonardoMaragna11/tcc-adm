const btnRes = document.getElementById('btnRes');
const nav = document.getElementById('navbar');

function menu(){
    nav.classList.toggle('active')
}

btnRes.addEventListener('click',menu)