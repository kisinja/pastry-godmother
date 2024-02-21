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

function showMenu() {
    if (hiddenMenu.style.display === "block") {
        hiddenMenu.style.display = "none";
    } else {
        hiddenMenu.style.display = "block";
    }
}