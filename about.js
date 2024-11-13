let cursorPointer = document.querySelector('.cursor-circle');
let mainContainer = document.querySelector('.main-container');
gsap.from('#workCard1',{
    x:-200,
    duration:2,
    delay:1,
    opacity:0,
    scrollTrigger:{
        trigger:'#workCard1',
    }
})
gsap.from('#workCard2',{
    y:-200,
    duration:2,
    delay:1,
    opacity:0,
    scrollTrigger:{
        trigger:'#workCard2',
    }
})
gsap.from('#workCard3',{
    x:200,
    duration:2,
    delay:1,
    opacity:0,
    scrollTrigger:{
        trigger:'#workCard3',
    }
})
gsap.from('#workCard4',{
    y:200,
    duration:2,
    delay:1,
    opacity:0,
    scrollTrigger:{
        trigger:'#workCard4',
    }
})

mainContainer.addEventListener('mousemove',(e)=>{
gsap.to(cursorPointer,{
    x:e.x,
    y:e.y,
    duration:1,
    ease:"back.out",
})
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
gsap.from('.show-ability-section .ability-left',{
    opacity:0,
    x:-200,
    duration:2,
    scrollTrigger:{
    trigger:'.show-ability-section .ability-left',
    }   
})
gsap.from('.show-ability-section .ability-right',{
    opacity:0,
    x:200,
    duration:2,
    scrollTrigger:{
        trigger:'.show-ability-section .ability-right',

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

gsap.from([".quotes-pic",'.scroll-to-top'], {
    y: -18,
    repeat: -1,
    yoyo: true, 
    duration: 1,
    ease: "power1.inOut"
});