// document.addEventListener("DOMContentLoaded", function () {
//     const listItems = document.querySelectorAll(".site-nav li");

//     listItems.forEach((listItem) => {
//         listItem.addEventListener("click", () => {
//             listItems.forEach((otherItem) => {
//                 otherItem.classList.remove('active')
//             })
//             listItem.classList.add('active')
//         });
//     });
// });

if (document.querySelector(".swiper")) {
    new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 2000,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    });
}


// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-inview", "");
        } else {
            entry.target.removeAttribute("data-inview");
        }
    });
});

Array.from(document.querySelectorAll('.section-line'))?.forEach((el) => {
    myobserver.observe(el);
});