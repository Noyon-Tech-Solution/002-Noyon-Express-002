let menuBer = document.getElementById("menu_ber");
let menu = document.getElementById("menu");

menuBer.addEventListener("click", () => {
    menu.className == "hidden" ? menu.classList.remove("hidden") : menu.classList.add("hidden")
})