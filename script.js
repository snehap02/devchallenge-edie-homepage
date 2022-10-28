const hamburger = document.querySelector(".hamburger-menu");
const menuContent = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    menuContent.classList.toggle('hidden');
})