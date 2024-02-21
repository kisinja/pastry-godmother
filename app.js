const menuBtn = document.getElementById('menu');
const navBar = document.querySelector('nav');
const hiddenMenu = document.querySelector('.hidden-menu');

window.onscroll = () => {
    if (window.scrollY > 0) {
        navBar.style.background = "#fff";
    }
    else {
        navBar.style.background = "transparent";
    }
};

menuBtn.addEventListener('click', () => {
    hiddenMenu.classList.toggle('show'); 
})