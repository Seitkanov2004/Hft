const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const menu = document.querySelector(".header--menu")
menu.addEventListener("click",() => {
    document.querySelector(".header--modal").style.display = "block"
})

const menuClose = document.querySelector(".header--modal__modal1--modal2__menu")
menuClose.addEventListener("click",() => {
    document.querySelector(".header--modal").style.display = "none"
})