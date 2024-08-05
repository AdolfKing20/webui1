const hamburger = document.getElementById("hamburger");
const menuList = document.getElementById("menulist");
const btnMore = document.getElementById("btnmore");
const readMore = document.getElementById("moretext");


hamburger.addEventListener("click", () => {
    menuList.classList.toggle("active")
})


btnMore.addEventListener("click", () => {
    readMore.classList.toggle("active");
    // con innerHTML hago que cada que le haga click en el boton de leer mas, cambie su texto a leer menos jaja
    if (readMore.classList.contains("active")) {
        btnMore.innerHTML = "Read less";
    } else {
        btnMore.innerHTML = "Read more";
    }
    console.log(readMore);

});

