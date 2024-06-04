const menuButton = document.querySelector('.menu');
const navLinks = document.querySelector('.nav_links')
const currentForm = document.getElementById("main_form")
const emailAddress = document.querySelector(".email_")
const submitButton = document.querySelector(".btn_")
// const emailValue = emailAddress.value;


menuButton.addEventListener("click", () =>{
        // console.log("hello world")
        navLinks.classList.toggle("hide")
})


currentForm.addEventListener("submit", (e) => {
        // const arr = []
        e.preventDefault();
        // console.log("SUBMITTED SUCCESSFULLY");
        alert("Submitted Successfully")
        // console.log(emailValue)
        console.log(emailAddress.value)
        // emailAddress.value = " "
        const storage ={
                email: emailAddress.value,
        }
        JSON.stringify(storage)
        localStorage.setItem("email", storage.email)
})

