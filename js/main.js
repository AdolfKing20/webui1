const hamburger = document.getElementById("hamburger");
const menuList = document.getElementById("menulist");
const btnMore = document.getElementById("btnmore");
const readMore = document.getElementById("moretext");


hamburger.addEventListener("click", () => {
    menuList.classList.toggle("active")
})


btnMore.addEventListener("click", () => {
    readMore.classList.toggle("active");

    if (readMore.classList.contains("active")) {
        btnMore.innerHTML = "Read less";
    } else {
        btnMore.innerHTML = "Read more";
    }
    console.log(readMore);

});