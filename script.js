const InputPassword = document.querySelector(".InputPassword");

const Indicator = document.querySelector(".Indicator");

let btn = document.querySelector(".btn");

let RequiredEmail = "test@gmail.com";
let RequiredPassword = "pass@1234";

let UserEmail = "";
let UserPassword = "";

InputPassword.addEventListener("keyup", (e) => {
  UserPassword = e.target.value;

  const UserInputArray = UserPassword.split("");

  if (UserInputArray.length >= 8 && UserInputArray.includes("@")) {
    Indicator.innerHTML = "Strong";

    InputPassword.classList.add("strong");
  } else if (UserInputArray.length >= 6 && UserInputArray.includes("@")) {

    Indicator.innerHTML = "Average";

    InputPassword.classList.add("medium");
  } else if (UserInputArray.length >= 6) {
    Indicator.innerHTML = "good";

    InputPassword.classList.add("weak");
  } else {
    InputPassword.classList.remove("strong");
    InputPassword.classList.remove("medium");
    InputPassword.classList.remove("weak");
  }
});

const InputEmail = document.querySelector(".InputEmail");

InputEmail.addEventListener("keyup", (e) => {
  UserEmail = e.target.value;
});

btn.addEventListener("click", () => {
 
  if (RequiredEmail == UserEmail && RequiredPassword == UserPassword) {
    window.open("./Welcome.html");
  } else {
    const PassCheck = document.querySelector(".PassCheck");
    PassCheck.innerHTML = "login credential incorrect!";
    InputPassword.classList.add("weak");
    InputEmail.classList.add("weak");
    InputPassword.classList.remove("strong");
    InputPassword.classList.remove("medium");
  }
});
