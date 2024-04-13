// Navbar Fixed & Back to top
const backToTop = document.querySelector('.back-to-top');

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    backToTop.classList.add('opacity-70');

    if(window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        backToTop.classList.add('flex');
        backToTop.classList.remove('hidden');
    } else {
        header.classList.remove('navbar-fixed');
        backToTop.classList.remove('flex');
        backToTop.classList.add('hidden');
    }
}

window.onscrollend = function() {
    backToTop.classList.remove('opacity-70');
}

// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu'); 

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Ketika diklik di luar 
window.addEventListener('click', function(e) {
    if(e.target != navMenu && e.target != hamburger) {
        navMenu.classList.add('hidden');
        hamburger.classList.remove('hamburger-active');
    }
});

// Dark Mode
const mode = document.querySelector('#toggle-mode');
const html = document.querySelector('html');

if(localStorage.theme == 'dark') {
    mode.checked = true;
}

mode.addEventListener('click', function() {
    if(mode.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});