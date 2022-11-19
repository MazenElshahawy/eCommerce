/**********Variables**********/
const prod = document.querySelectorAll(".pro")
const bar = document.querySelector("#bar")
const navbar = document.querySelector("#navbar")
const close = document.querySelector("#close")


/**********function of selecting an product from multiple **********/
prod[0].addEventListener("click", (eo) => {
    window.location.href = "singleproduct.html";    
})

prod[1].addEventListener("click", (eo) => {
    window.location.href = "singleproduct.html";
})

prod[2].addEventListener("click", (eo) => {
    window.location.href = "singleproduct.html";
})

prod[3].addEventListener("click", (eo) => {
    window.location.href = "singleproduct.html";
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
