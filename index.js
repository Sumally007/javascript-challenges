
// window.addEventListener('scroll', function() {
//     const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     const scrollTop = window.scrollY;
//     const scrollPercentage = (scrollTop / docHeight) * 100;
//     const scrollIndicator = document.getElementById('scroll-bar');
//     scrollIndicator.style.width = scrollPercentage + '%';
//   });


let indicator = document.querySelector("#scroll-bar");
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", scroll);

function scroll() {
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop / scrollHeight) * 100;
    indicator.style.width = `${scrolled}%`;
};