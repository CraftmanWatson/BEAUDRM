const navBtn = document.querySelector(".nav-btn");
const navScreen = document.querySelector(".nav-screen");
const homeScreen = document.querySelector(".hero");
const aboutScreen = document.querySelector(".about");
const catalogueScreen = document.querySelector(".catalogue");
const testimonialScreen = document.querySelector(".testimonial");
const contactScreen = document.querySelector(".footer");

const homeBtn = document.querySelector(".home-btn");
const homeBtn2 = document.querySelector(".logo")
const aboutBtn = document.querySelector(".about-btn");
const aboutBtn2 = document.querySelector(".hero-cta");
const catalogueBtn = document.querySelector(".catalogue-btn");
const testimonialBtn = document.querySelector(".testimonial-btn");
const contactBtn = document.querySelector(".contact-btn");


const toCatalog1 = document.querySelector(".catalogue-card1");
const toCatalog2 = document.querySelector(".catalogue-card2");
const toCatalog3 = document.querySelector(".catalogue-card3");
const toCatalog4 = document.querySelector(".catalogue-card4");

navBtn.addEventListener("click", function () {
    navScreen.classList.toggle("active");
    navBtn.classList.toggle("cross");
});


homeBtn.addEventListener("click", function() {
    homeScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});
homeBtn2.addEventListener("click", function() {
    homeScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

aboutBtn.addEventListener("click", function() {
    aboutScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});
aboutBtn2.addEventListener("click", function() {
    window.location.href = "https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=159651196451&hvpone=&hvptwo=&hvadid=675114638556&hvpos=&hvnetw=g&hvrand=18234289172677686152&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9235309&hvtargid=kwd-10573980&hydadcr=2246_13649807";
});

catalogueBtn.addEventListener("click", function() {
    catalogueScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});


testimonialBtn.addEventListener("click", function() {
    testimonialScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});


contactBtn.addEventListener("click", function() {
    contactScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

toCatalog1.addEventListener("click", function() {
    window.location.href = "https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=159651196451&hvpone=&hvptwo=&hvadid=675114638556&hvpos=&hvnetw=g&hvrand=18234289172677686152&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9235309&hvtargid=kwd-10573980&hydadcr=2246_13649807";
});
toCatalog2.addEventListener("click", function() {
    window.location.href = "https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=159651196451&hvpone=&hvptwo=&hvadid=675114638556&hvpos=&hvnetw=g&hvrand=18234289172677686152&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9235309&hvtargid=kwd-10573980&hydadcr=2246_13649807";
});
toCatalog3.addEventListener("click", function() {
    window.location.href = "https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=159651196451&hvpone=&hvptwo=&hvadid=675114638556&hvpos=&hvnetw=g&hvrand=18234289172677686152&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9235309&hvtargid=kwd-10573980&hydadcr=2246_13649807";
});

const sliders = document.querySelectorAll(
    '.catalogue-cards-group, .testimonial-cards-group, .catalogue-aisles-cards-group'
);

sliders.forEach((slider) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1; 
        slider.scrollLeft = scrollLeft - walk;
    });
});