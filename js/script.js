const nav = document.getElementById('navbar');
window.onscroll = function () { 
    if (document.body.scrollTop >= 650 || document.documentElement.scrollTop >= 650 ) {
        nav.classList.add("nav-colored");
        nav.classList.remove("nav-transparent");
    } 
    else {
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
    }
};