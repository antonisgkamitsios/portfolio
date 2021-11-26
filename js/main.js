var tl = gsap.timeline();

tl.fromTo(".header__contents .main-title",
    { //from
        opacity: 0,
        y: 100,
        visibility: 'hidden'
    },
    { //to
        visibility: 'visible',
        opacity: 1,
        y: 0,
        duration: 1,

    })
    .addLabel("headerEnd")
    .fromTo(".header__contents .sub",
    {//from
        opacity: 0,
        y: 100, visibility: 'hidden'
    },
    {//to
        visibility: 'visible',
        opacity: 1, y: 0,
        duration: .7

    }, "-=.4")
    .fromTo(".header .scroll-to-ct", 
    {//from
        opacity: 0, 
        visibility: 'hidden' 
    }, 
    { //to
        visibility: 'visible', 
        opacity: 1, 
        duration: 1 
}, "headerEnd+=0.1");
let scrollToBt = document.querySelector('.header .scroll-bt');
let projectsSection = document.querySelector('.projects-section');
scrollToBt.addEventListener('click', (e)=>{
    console.log('ok');
    projectsSection.scrollIntoView({behavior: "smooth"});
})