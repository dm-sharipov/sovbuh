const pageScrollTop = document.getElementById("page-scroll-top");
const headerMenuButton = document.getElementById("header-menu-button");

headerMenuButton.addEventListener("click", () => {
    if (headerMenuButton.getAttribute("aria-expanded") === "true") {
        headerMenuButton.classList.remove("menu-button--opened");
        headerMenuButton.setAttribute("aria-expanded", "false");
    } else {
        headerMenuButton.classList.add("menu-button--opened");
        headerMenuButton.setAttribute("aria-expanded", "true");
    }
});

document.addEventListener("keyup", event => {
    if (event.key === "Escape") {
        headerMenuButton.classList.remove("menu-button--opened");
    }
});

pageScrollTop.addEventListener("click", event => {
    window.scrollTo(0, 0);

    event.preventDefault();
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        pageScrollTop.classList.add("page__scroll-top--visible");
    } else {
        pageScrollTop.classList.remove("page__scroll-top--visible");
    }
});
