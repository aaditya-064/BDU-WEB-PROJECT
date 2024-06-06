const menuButton = document.querySelector(".menu");
const navLinks = document.querySelector(".nav_links");
const currentForm = document.getElementById("main_form");
const emailAddress = document.querySelector(".email_");
const submitButton = document.querySelector(".btn_");
const navBar = document.querySelector("#sticky_nav");
const topNavDiv = document.querySelector(".top_nav");
const namePrintArea = document.querySelector("#namePrint");
const logOutButton = document.querySelector("#logOut");

window.addEventListener("scroll", () => {
  const navOffset = navBar.offsetTop;
  const pageOffset = window.pageYOffset;
  if (pageOffset > navOffset + 30) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
});
// const emailValue = emailAddress.value;

menuButton.addEventListener("click", () => {
  // console.log("hello world")
  navLinks.classList.toggle("hide");
});

currentForm.addEventListener("submit", (e) => {
  // const arr = []
  e.preventDefault();
  // console.log("SUBMITTED SUCCESSFULLY");
  alert("Submitted Successfully");
  // console.log(emailValue)
  console.log(emailAddress.value);
  // emailAddress.value = " "
  const storage = {
    email: emailAddress.value,
  };
  JSON.stringify(storage);
  localStorage.setItem("email", storage.email);
});
// })
// const logOutButton = document.querySelector("#logOut");

// /*
// Rules
// 1. only logged in user can goto index.html
// 2. if user is not logged in they should be redirected to login page
// 2. if user is logged in they cannot visit signup or login page and should be redirected back to index.html
// */

window.onload = () => {
  const getCurrentLoggedUser = localStorage.getItem("logged_user");
  if (getCurrentLoggedUser) {
    topNavDiv.classList.add("displayNone");
    const parseUser = JSON.parse(getCurrentLoggedUser);
    namePrintArea.innerHTML = ` Hi, ${
      parseUser.firstName + " " + parseUser.lastName
    } 👋`;
    // console.log(parseUser.firstName)
  } else {
    logOutButton.classList.add("displayNone");
    navLinks.classList.add("marginNavLinks");
  }
};

logOutButton.addEventListener("click", () => {
  localStorage.removeItem("logged_user");
  window.location.replace("index.html");
  console.log("button clicked");
});
