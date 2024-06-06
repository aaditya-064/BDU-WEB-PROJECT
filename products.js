
const shraddhaButton = document.querySelector("#shraddha")
const sirjanButton = document.querySelector('#sirjan')
const shraddhaProducts = document.querySelector(".shraddhaProducts")
const sirjanProducts = document.querySelector(".sirjanProducts")

window.onload =(e) =>{
    shraddhaProducts.classList.remove("hideShraddha")
    sirjanButton.classList.add("deactive")
} 

shraddhaButton.addEventListener("click", ()=>{
    shraddhaProducts.classList.remove("hideShraddha")
    sirjanProducts.classList.add("hideSirjan")
    sirjanButton.classList.add("deactive")
    shraddhaButton.classList.remove("deactive")

})

sirjanButton.addEventListener("click", ()=>{
    sirjanProducts.classList.remove("hideSirjan")
    shraddhaProducts.classList.add("hideShraddha")
    shraddhaButton.classList.add("deactive")
    sirjanButton.classList.remove("deactive")
})