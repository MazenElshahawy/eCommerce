/**********Variables**********/
const bar = document.querySelector("#bar")
const navbar = document.querySelector("#navbar")
const close = document.querySelector("#close")



/**********Coding**********/

bar.addEventListener("click", (eo) => {
    navbar.classList.add("active")
})

close.addEventListener("click", (eo) => {
    navbar.classList.remove("active")
})