/* MENU HAMBURGUESA RESPONSIVE */
const nav = document.querySelector("#nav");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");

openMenu.addEventListener("click", () => {
    nav.classList.add("visible");
})

closeMenu.addEventListener("click", () => {
    nav.classList.remove("visible");
})

