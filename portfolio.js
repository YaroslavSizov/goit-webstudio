// autoPaddingTop
const { height: pageHeaderHeight } = document
    .querySelector(".header")
    .getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;

// openMenu
(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
    });
})();