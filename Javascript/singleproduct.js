/**********Variables**********/
const mainimg = document.querySelector("#mainimage")
const smallimg = document.querySelectorAll(".small-img")
const bar = document.querySelector("#bar")
const navbar = document.querySelector("#navbar")
const close = document.querySelector("#close")

/**********function of selecting an image from multiple **********/


smallimg[0].addEventListener("click", (eo) => {
    mainimg.src = smallimg[0].src
})

smallimg[1].addEventListener("click", (eo) => {
    mainimg.src = smallimg[1].src
})

smallimg[2].addEventListener("click", (eo) => {
    mainimg.src = smallimg[2].src
})

smallimg[3].addEventListener("click", (eo) => {
    mainimg.src = smallimg[3].src
})

/**********function of sliding navbar open/close**********/

bar.addEventListener("click", (eo) => {
    navbar.classList.add("active")
    eo.preventDefault();
})

close.addEventListener("click", (eo) => {
    navbar.classList.remove("active");
    eo.preventDefault();
})
