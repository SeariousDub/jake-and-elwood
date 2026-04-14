const closeButton = document.querySelector(".close-nav")
const openButton = document.querySelector(".open-nav")
const nav = document.querySelector(".nav")

closeButton.addEventListener("click", function() {
    // console.log("The close button was clicked")
    nav.classList.remove('navigation-open')
})

openButton.addEventListener("click", function() {
    // console.log("The open button was clicked")
    nav.classList.add('navigation-open')
})