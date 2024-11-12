let cursorPointer = document.querySelector('.cursor-circle');
let mainContainer = document.querySelector('.main-container');
mainContainer.addEventListener('mousemove',(e)=>{
gsap.to(cursorPointer,{
    x:e.x,
    y:e.y,
    duration:1,
    ease:"back.out",
})
})
gsap.from('.hero-content-inner',{
    opacity:0,
    duration:3,
    delay:1,
    scrollTrigger:{
        trigger:'.hero-content-inner',
    
    }
})

gsap.from('.logo-pic',{
    opacity:0,
    duration:2,
    delay:1,
    stagger:1,  
    scrollTrigger:{
        triiger:'.logo-pic',
    }
})
gsap.from('.category-card ',{
   opacity:0,
    duration:2,
    delay:1,
    stagger:1,  
    scrollTrigger:{
        trigger:'.category-card',
        scrub:1,
    }
})

gsap.from('.sidebar-items ul li',{
    x:200,
    opacity:0,
    duration:1,
    stagger:1,
    
})

//animation for about page
gsap.from('.info-section .info-left',{
    opacity:0,
    x:-200,
    duration:2,
    scrollTrigger:{
        trigger:'.info-section .info-left',
    }   
})
gsap.from('.info-section .info-right',{
    opacity:0,
    x:200,
    duration:2,
    scrollTrigger:{
        trigger:'.info-section .info-right',

    }
})
gsap.from('.hero-title h1',{
    opacity:0,
    duration:2,
    delay:1,
    y:200,
})

gsap.from('.about-bg',{
    width:2,
})