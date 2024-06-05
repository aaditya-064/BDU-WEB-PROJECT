
const shraddhaButton = document.querySelector("#shraddha")
const sirjanButton = document.querySelector('#sirjan')
const shraddhaProducts = document.querySelector(".shraddhaProducts")
const sirjanProducts = document.querySelector(".sirjanProducts")


shraddhaButton.addEventListener("click", ()=>{
    shraddhaProducts.classList.remove("hideShraddha")
    sirjanProducts.classList.add("hideSirjan")
})

sirjanButton.addEventListener("click", ()=>{
    sirjanProducts.classList.remove("hideSirjan")
    shraddhaProducts.classList.add("hideShraddha")
})