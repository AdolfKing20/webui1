const hamburger = document.getElementById("hamburger")
const menuList = document.getElementById("menulist")



hamburger.addEventListener("click", () => {
    menuList.classList.toggle("active")
})