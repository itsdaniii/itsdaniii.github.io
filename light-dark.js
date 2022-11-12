/* ====== toggle light/dark mode ====== */
const lightDark = document.querySelector(".light-dark");

lightDark.addEventListener("click", () => {
    lightDark.querySelector("i").classList.toggle("fa-moon");
    lightDark.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        lightDark.querySelector("i").classList.add("fa-sun");
    } else {
        lightDark.querySelector("i").classList.add("fa-moon");
    }
})