let cursorPointer = document.querySelector('.cursor-circle');
let mainContainer = document.querySelector('.main-container');
let workCards = document.querySelectorAll('.work-cards');
console.log(workCards);

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
    duration:1.5,
    delay:1,
    stagger:1,  
    scrollTrigger:{
        triiger:'.logo-pic',
    }
})
gsap.from('.category-card ',{
   opacity:0,

    duration:1,
    delay:1,
    stagger:1,  
    scrollTrigger:{
        trigger:'.category-card',

    }
})

gsap.from('.sidebar-items ul li',{
    x:200,
    opacity:0,
    duration:1,
    stagger:1,
    
})

gsap.from('.browse-header', {
    x: -200,
    // opacity: 0, 
    duration: 1.5, 
    ease: "power3.out", 
    scrollTrigger: {
      trigger: '.browse-header', 
      start: "top 80%", 
      scrub: 1,
    }
  });
  
gsap.from('.Location-header',{
    x: -200,
    duration:1.5,
    opacity:0,

    ease: "power3.out",
    scrollTrigger:{
        trigger:'.Location-header',
        scrub:true,
    },

    scrub:1,
})
gsap.from('.blog-header',{
    x: -300,
    duration:1,
    // opacity:0,

    scrollTrigger:{
        trigger:'.blog-header',
        scrub:1,
    },

    scrub:1,
})
gsap.from('.blog-card',{
    opacity:0,
    duration:2,
    delay:1,
    stagger:1,
    ease:"power3.out",
    scrollTrigger:{
        trigger:'.blog-card'
    },

})
gsap.from('.Location-card',{
    opacity:0,
    duration:2,
    delay:1,
    stagger:1,
    ease:"power3.out",
    scrollTrigger:{
        trigger:'.Location-card'
    },

})
gsap.from('.foot-items ul li',{
    y:10,
    opacity:0,
    stagger:1,
    duration:1,
    scrollTrigger:{
        trigger:'.foot-items ul li',
    }
})
gsap.from([".left-pic2" ,".left-pic3",'.scroll-to-top','.subscribe-box1 .box1-pic','.subscribe-box1 .box2-pic'], {
    y: -18,
    repeat: -1,
    yoyo: true, 
    duration: 1,
    ease: "power1.inOut"
});




