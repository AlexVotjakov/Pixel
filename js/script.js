let contactActive = document.querySelector('.contact__active');
let formActive = document.querySelector('.form__active');
let arrowRotate = document.querySelector('.contact__arrow');
let burgerMenu = document.querySelector('.burger__menu');
let nav = document.getElementById('nav');
let banner = document.querySelector('.banner');

contactActive.addEventListener('click', function(event) {
    formActive.classList.toggle('show');
    arrowRotate.classList.toggle('arrow__rotate')
})


burgerMenu.addEventListener('click', function(event) {
    nav.classList.toggle('show');
})

