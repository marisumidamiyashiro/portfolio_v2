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
