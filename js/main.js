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
scrollToBt.addEventListener('click', (e) => {
    projectsSection.scrollIntoView({ behavior: "smooth" });
})
let projectCards = document.querySelectorAll('.project-card');
let scrollTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects-section',
        start: "top center"
    }, 
    onComplete: function(){
        projectCards.forEach(card=>{
            card.classList.add('hover');
            console.log('ok');
        })
    }
});
scrollTl.fromTo('.project-card a',

    {   
        
        opacity: 0,
        y: 100,
    }, {
        
        opacity: 1,
        y:0,
        stagger: 0.1,
    })