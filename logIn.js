const currentForm = document.querySelector(".inputForm");
const emailAddress = document.querySelector("#email");
const password = document.querySelector("#pass");
const signInButton = document.querySelector("#signInButton");

window.onload = () => {
  const getCurrentLoggedUser = localStorage.getItem("logged_user");

//   if (getCurrentLoggedUser) window.location.replace("index.html");
};

currentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loggedUser = getItem(emailAddress.value, password.value);
  if (loggedUser) {
    saveLoggedInUser(loggedUser);
    window.location.href = `index.html`;
  } else {
    alert("user not found");
  }
});

function saveLoggedInUser(user) {
  localStorage.setItem("logged_user", JSON.stringify(user));
}

function getItem(email, pass) {
  const getItem = localStorage.getItem("users");
  if (getItem) {
    const allItems = JSON.parse(getItem);
    const currentUser = allItems.find(
      (i) => i.email === email && i.password === pass
    );
    console.log(currentUser);
    return currentUser;
  }
  return null;
}
