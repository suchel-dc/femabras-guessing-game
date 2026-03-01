const currentYear = document.getElementById("current-year");
const bodyTag = document.getElementsByTagName("ul");
const openButton = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".close-button");
const desktopMenu = document.querySelector(".menu-container");

showFlex = () => {
    desktopMenu.classList.add("show-flex");
    desktopMenu.classList.remove("hidde")
}
hidde = () => {
    desktopMenu.classList.add("hidde");
    desktopMenu.classList.remove("show-flex");    
}

openButton.addEventListener("click", showFlex)
closeButton.addEventListener("click", hidde)

currentYear.textContent = new Date().getFullYear();