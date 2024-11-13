// let valueDisplays = document.querySelectorAll('.num');
// valueDisplays.forEach((valueDisplay) => {
//     let startValue = 0;
//     let endValue = valueDisplay.innerHTML;
//     let counter = setInterval(function () {
//         startValue += 1;
//         let fotmatNumber = startValue.toLocaleString();
//         valueDisplay.textContent = fotmatNumber;
//         if (startValue == endValue) {
//             clearInterval(counter)
//         }
//     }, 30)

// })

let valueDisplays = document.querySelectorAll('.num');
let header = document.querySelector('nav');
let scrollTopBtn = document.querySelector('.scroll-to-top');
let navLinkEls = document.querySelectorAll('.header-items ul li a ,.sidebar-items ul li a');
let sidebarActive = document.querySelector('.side-container');
let toggleBtn = document.getElementById('toggle-btn');
let sidebarBgOverlay = document.getElementById('sidebarBgOverlay');
    let body = document.querySelector('body');


toggleBtn.addEventListener('click', () => {
    sidebarActive.classList.add('active-sidebar');
    body.style.overflow = 'hidden';
    sidebarBgOverlay.classList.add('filter-bg-overlay');
})
function closedSidebar() {
    sidebarActive.classList.remove('active-sidebar');
    body.classList.remove('overflow-hidden');
    sidebarBgOverlay.classList.remove('filter-bg-overlay');
    body.style.overflow = 'auto';
}




const windowPathName = window.location.pathname;

navLinkEls.forEach((navLink) => {
    const navLinkPathName = new URL(navLink.href).pathname;

    if (navLinkPathName === windowPathName) {
        navLink.classList.add('active');
    }

    else {
        navLink.classList.remove('active');
    }
})

console.log(header);
let duration = 2000; 
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.innerHTML); 
    console.log(typeof endValue);

    let increment = endValue / (duration / 30); 
    console.log(increment);

    let counter = setInterval(function () {
        startValue += increment;
        let formattedNumber = Math.floor(startValue).toLocaleString(); 
        valueDisplay.textContent = formattedNumber;
        
        if (startValue >= endValue) { 
            valueDisplay.textContent = endValue.toLocaleString(); 
            clearInterval(counter);
        }
    }, 30);
});

window.addEventListener(('scroll'), () => {
    if (window.scrollY > 0) {
        header.classList.add('header-active');
        scrollTopBtn.style.display = 'block'
    }
    else {
        header.classList.remove('header-active');
        scrollTopBtn.style.display = 'none';
    }
})
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

