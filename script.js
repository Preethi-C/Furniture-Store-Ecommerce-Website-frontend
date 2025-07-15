//catalogue carousel
var catalogue = document.querySelector(".catalogue")
var nextbtn = document.getElementById("nextbtn")
var backbtn = document.getElementById("backbtn")

nextbtn.addEventListener("click", ()=>{
    catalogue.style.scrollBehavior = "smooth";
    catalogue.scrollLeft += 1200;
})

backbtn.addEventListener("click", ()=>{
    catalogue.style.scrollBehavior = "smooth";
    catalogue.scrollLeft -= 1200;
})
