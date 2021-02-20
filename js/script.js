let contactActive = document.querySelector('.contact__active');
let close = document.querySelector('.close');
let formActive = document.querySelector('.form__active');
let displayStatus = window.getComputedStyle(formActive).display;
let burgerMenu = document.querySelector('.burger__menu');
let nav = document.getElementById('nav');
let banner = document.querySelector('.banner');

contactActive.addEventListener('click', function(event) {
    /*if (displayStatus =='none'){
    	 formActive.style.display = 'block';
    }*/
    formActive.style.display = 'block'

})

close.addEventListener('click', function(event) {
    /*if(formActive.style.display == 'block'){
    	 formActive.style.display = 'none';
    }*/
    formActive.style.display = 'none';
})

burgerMenu.addEventListener('click', function(event) {
    nav.classList.add('show');
})

