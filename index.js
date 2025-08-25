const menu = document.getElementById("menu");
const btn = document.getElementById("menu-btn");

btn.onclick = function() {
    menu.classList.toggle("menu");
}