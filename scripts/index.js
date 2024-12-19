const scrollTop = document.getElementById("page-scroll-top");

scrollTop.addEventListener("click", event => {
    window.scrollTo(0, 0);

    event.preventDefault();
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollTop.classList.add("page__scrollTop--visible");
    } else {
        scrollTop.classList.remove("page__scrollTop--visible");
    }

    // scrollTop.classList.toggle("page__scrollTop--visible", window.scrollY > 400);
});
