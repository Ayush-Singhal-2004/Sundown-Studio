//1
document.getElementById("page4-content-item-id1").addEventListener("mouseenter", (event) => {
    document.getElementById("page4-content-screen-img").src = "leonardo-burgos-_OYIxRbFBNw-unsplash.jpg"
    document.getElementById("page4-content-screen-id").style.opacity = 1;
});
document.getElementById("page4-content-item-id1").addEventListener("mouseleave", () => {
    document.getElementById("page4-content-screen-id").style.opacity = 0;
});
//2
document.getElementById("page4-content-item-id2").addEventListener("mouseenter", (event) => {
    document.getElementById("page4-content-screen-img").src = "finn-lC2LO2YUhBE-unsplash.jpg"
    document.getElementById("page4-content-screen-id").style.opacity = 1;
});
document.getElementById("page4-content-item-id2").addEventListener("mouseleave", () => {
    document.getElementById("page4-content-screen-id").style.opacity = 0;
});
//3
document.getElementById("page4-content-item-id3").addEventListener("mouseenter", (event) => {
    document.getElementById("page4-content-screen-img").src = "jerome-iqowgR3bh_0-unsplash.jpg"
    document.getElementById("page4-content-screen-id").style.opacity = 1;
});
document.getElementById("page4-content-item-id3").addEventListener("mouseleave", () => {
    document.getElementById("page4-content-screen-id").style.opacity = 0;
});
//4
document.getElementById("page4-content-item-id4").addEventListener("mouseenter", (event) => {
    document.getElementById("page4-content-screen-img").src = "clay-banks-1KPfcPdbWFM-unsplash.jpg"
    document.getElementById("page4-content-screen-id").style.opacity = 1;
});
document.getElementById("page4-content-item-id4").addEventListener("mouseleave", () => {
    document.getElementById("page4-content-screen-id").style.opacity = 0;
});
//5
document.getElementById("page4-content-item-id5").addEventListener("mouseenter", (event) => {
    document.getElementById("page4-content-screen-img").src = "robert-bye-WTPp4wgourk-unsplash.jpg"
    document.getElementById("page4-content-screen-id").style.opacity = 1;
});
document.getElementById("page4-content-item-id5").addEventListener("mouseleave", () => {
    document.getElementById("page4-content-screen-id").style.opacity = 0;
});
//6
document.getElementById("page4-content-item-id6").addEventListener("mouseenter", (event) => {
    document.getElementById("page4-content-screen-img").src = "zachary-shakked-9aYAaVjm3_o-unsplash.jpg"
    document.getElementById("page4-content-screen-id").style.opacity = 1;
});
document.getElementById("page4-content-item-id6").addEventListener("mouseleave", () => {
    document.getElementById("page4-content-screen-id").style.opacity = 0;
});
//7
document.getElementById("page4-content-item-id7").addEventListener("mouseenter", (event) => {
    document.getElementById("page4-content-screen-img").src = "tomas-anton-escobar-ZjACBOMCUKk-unsplash.jpg"
    document.getElementById("page4-content-screen-id").style.opacity = 1;
});
document.getElementById("page4-content-item-id7").addEventListener("mouseleave", () => {
    document.getElementById("page4-content-screen-id").style.opacity = 0;
});

//...
document.getElementById("page4-content-id").addEventListener("mouseenter", (event) => {
    document.getElementById("page4-content-screen-img").src = "ryan-ancill-5684tm9pat8-unsplash.jpg"
    document.getElementById("page4-content-screen-id").style.opacity = 1;
    document.getElementById("page4-content-screen-id").style.height = "33.3vw";
    document.getElementById("page4-content-screen-img").style.height = "100%";
});
document.getElementById("page4-content-id").addEventListener("mouseleave", () => {
    document.getElementById("page4-content-screen-id").style.opacity = 0;
    document.getElementById("page4-content-screen-id").style.height = 0;
    document.getElementById("page4-content-screen-img").style.height = 0;
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    freeMode: true,
});


let swiperContent = document.getElementById("page5-main-swiper-id");
let cursor = document.getElementById("cursor");
swiperContent.addEventListener("mousemove", (details) => {
    gsap.to(cursor, {
        x : details.x + 50,
        y : details.y - 300
    });
});

swiperContent.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        scale : 1,
        opacity : 1
    });
});

swiperContent.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        scale : 0,
        opacity : 0
    });
});

setTimeout(() => {
    document.getElementById("loader-id").style.top = "-100%";
}, 6000);
