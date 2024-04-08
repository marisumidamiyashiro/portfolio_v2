document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".site-nav li");

    listItems.forEach((listItem) => {
        listItem.addEventListener("click", () => {
            listItems.forEach((otherItem) => {
                otherItem.classList.remove('active')
            })
            listItem.classList.add('active')
        });
    });
});


const swiper = new Swiper('.swiper', {
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