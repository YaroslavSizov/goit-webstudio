// autoPaddingTop
const { height: pageHeaderHeight } = document
    .querySelector(".header")
    .getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`;



// openModalBtn
const refs = {
    openModalBtn: document.querySelector("[data-open-modal]"),
    closeModalBtn: document.querySelector("[data-close-modal]"),
    backdrop: document.querySelector("[data-backdrop]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.backdrop.classList.toggle("is-hidden");
}

function logBackdropClick() {
    console.log("Это клик в бекдроп");
}


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