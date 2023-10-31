const botao = document.getElementById('nav-icon3');
const navbar = document.getElementById('navbar');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const body = document.querySelector('body');
const main = document.querySelector('main');

botao.addEventListener('click', () => {
    botao.classList.toggle('open');
    setTimeout(() => {
        navbar.classList.toggle('navbar-fixada');
        menu.classList.toggle('menu-aberto');
        overlay.classList.toggle('overlay-ativado');
        body.classList.toggle('scroll-bloqueado');
    }, 150)
})