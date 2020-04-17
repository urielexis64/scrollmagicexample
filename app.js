const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
        duration: 7000,
        triggerElement: intro,
        triggerHook: 0
    })
    /*  .addIndicators() */
    .setPin(intro)
    .addTo(controller);


//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
        duration: 1500,
        triggerElement: intro,
        triggerHook: 0
    }).setTween(textAnim)
    .addTo(controller);


//Video Animation
let accelamount = 0.05;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = scrollpos;
}, 33.33);