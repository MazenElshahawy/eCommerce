/**********Variables**********/
const mainimg = document.querySelector("#mainimage")
const smallimg = document.querySelectorAll(".small-img")

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