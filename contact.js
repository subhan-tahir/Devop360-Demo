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

    gsap.from('.scroll-to-top', {
        y: -18,
        repeat: -1,
        yoyo: true, 
        duration: 1,
        ease: "power1.inOut"
    });

gsap.from('.contact-form .inner',{
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:'.contact-form .inner',
        scrub:true,
    }

})
gsap.from('.hero-title h1',{
    opacity:0,
    duration:2,
    delay:1,
    y:200,
})









