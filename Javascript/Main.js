/**********Variables**********/
const bar = document.querySelector("#bar")
const navbar = document.querySelector("#navbar")
const close = document.querySelector("#close")
const mainimg = document.querySelector("#mainimage")
const smallimg = document.querySelectorAll(".small-img")
const prod = document.querySelectorAll(".pro")

/**********function of sliding navbar open/close**********/

bar.addEventListener("click", (eo) => {
    navbar.classList.add("active")
    eo.preventDefault();
})

close.addEventListener("click", (eo) => {
    navbar.classList.remove("active");
    eo.preventDefault();
})
