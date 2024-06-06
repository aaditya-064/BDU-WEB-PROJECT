const inputForm = document.querySelector(".inputForm")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const emailAddress = document.querySelector("#email")
const pass = document.querySelector("#password")
const checkBox = document.querySelector("#checkbox_")
const signUpButton = document.querySelector("#signUpButton")

const users = []

window.onload = ()=>{
    const getCurrentLoggedUser = localStorage.getItem('logged_user')

    // if(getCurrentLoggedUser) window.location.replace('index.html')
}

inputForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(!firstName.value && !lastName.value && !emailAddress.value && !pass.value){
        alert("Please Enter all the details")
        return 
    }

    if(!checkBox.checked){
        alert("Please agree to the checkbox")
        return;
    }
    const user = {
        firstName:firstName.value,
        lastName: lastName.value,
        email: emailAddress.value,
        password: pass.value
    }
    firstName.value = ""  
    lastName.value = ""  
    emailAddress.value = ""  
    pass.value = ""  
    checkBox.checked = false  
    storeUser(user)
    // localStorage.setItem("firstName", firstName.value)
    window.location.href="logIn.html"
})

function storeUser(user){
    const previouseUser = retriveUser(user)
    // console.log(previouseUser)
    if(previouseUser.found){
        alert("User already exists Please Log In")
        return
    }
    const usersList = getAllUser()
    // console.log(usersList)
    usersList.push(user)
    localStorage.setItem('users',JSON.stringify(usersList))
}

function retriveUser(user){ 
    const prevUsers = localStorage.getItem('users')
    if(prevUsers){
        const allUsers = JSON.parse(prevUsers)
        const prevUser = allUsers.find(currentUser => currentUser.email === user.email)
        if(prevUser){
            return {found:true,user:prevUser}
        }else{
            return {found:false,user:user}
        }
    }else{
        return {found:false,user:user}
    }
}

function getAllUser(){
    const allUser = localStorage.getItem('users')
    if(allUser) return JSON.parse(allUser)
        return []
}

