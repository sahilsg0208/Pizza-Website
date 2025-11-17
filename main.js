/***************************** SHOW MENU **************************/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

        /* MENU SHOW */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
        /* MENU HIDDEN */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/***************************** REMOVE MENU MOBILE **************************/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    //When we click on each [nav_link] , we remove the [show-menu] class 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => navMenu.addEventListener('click', linkAction))

/***************************** ADD SHADOW HEADER **************************/
const shadowHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)




/***************************** SWIPER POPULAR **************************/
const swiperPopular = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto'
})



/*****************SWIPER CLASS ******************/


/***************************** SHOW MENU **************************/
/***************************** SHOW MENU **************************/
/***************************** SHOW MENU **************************/