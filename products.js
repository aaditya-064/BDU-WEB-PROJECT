const menuButton = document.querySelector(".menu");
const navLinks = document.querySelector(".nav_links");
const navBar = document.querySelector("#sticky_nav");
const topNavDiv = document.querySelector(".top_nav");
const namePrintArea = document.querySelector("#namePrint");
const logOutButton = document.querySelector("#logOut");

// window.addEventListener("scroll", () => {
//   const navOffset = navBar.offsetTop;
//   const pageOffset = window.pageYOffset;
//   if (pageOffset > navOffset + 30) {
//     navBar.classList.add("sticky");
//   } else {
//     navBar.classList.remove("sticky");
//   }
// });
// const emailValue = emailAddress.value;

menuButton.addEventListener("click", () => {
  // console.log("hello world")
  navLinks.classList.toggle("hide");
});

logOutButton.addEventListener("click", () => {
  localStorage.removeItem("logged_user");
  window.location.replace("index.html");
  console.log("button clicked");
});

//after the broiler plate

const shraddhaButton = document.querySelector("#shraddha");
const sirjanButton = document.querySelector("#sirjan");
const shraddhaProducts = document.querySelector(".shraddhaProducts");
const sirjanProducts = document.querySelector(".sirjanProducts");

window.onload = () => {
  shraddhaProducts.classList.remove("hideShraddha");
  sirjanButton.classList.add("deactive");
  console.log("hello");
  const getCurrentLoggedUser = localStorage.getItem("logged_user");
  if (!getCurrentLoggedUser || getCurrentLoggedUser) {
    logOutButton.classList.add("displayNone");
    // navLinks.classList.add("marginNavLinks");
  }
};

shraddhaButton.addEventListener("click", () => {
  shraddhaProducts.classList.remove("hideShraddha");
  sirjanProducts.classList.add("hideSirjan");
  sirjanButton.classList.add("deactive");
  shraddhaButton.classList.remove("deactive");
});

sirjanButton.addEventListener("click", () => {
  sirjanProducts.classList.remove("hideSirjan");
  shraddhaProducts.classList.add("hideShraddha");
  shraddhaButton.classList.add("deactive");
  sirjanButton.classList.remove("deactive");
});
