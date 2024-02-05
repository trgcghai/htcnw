const showModalBtn = document.querySelector(".show_modal_btn");
const hideModalBtns = document.querySelectorAll(".close_btn");
const modal = document.getElementById("modal");
const loginPane = document.getElementById("login");
const loginBtn = document.getElementById("login_btn");
const signUpPane = document.getElementById("signup");
const signUpBtn = document.getElementById("signup_btn");
const submitLoginBtn = document.querySelector(".login_btn");
const submitSignUpBtn = document.querySelector(".signup_btn");
const loginFields = document.querySelectorAll(".login_input");
const signUpFields = document.querySelectorAll(".signup_input");
const signUpSelects = document.querySelectorAll(".signup_select");
const captcha = document
  .querySelector(".captcha_display")
  .innerHTML.split(" ")
  .join("");

showModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

hideModalBtns.forEach((element) => {
  element.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

loginBtn.addEventListener("click", () => {
  signUpBtn.classList.remove("active");
  signUpPane.classList.remove("active");
  loginPane.classList.add("active");
  loginBtn.classList.add("active");

  resetLoginForm();
});

signUpBtn.addEventListener("click", () => {
  loginBtn.classList.remove("active");
  loginPane.classList.remove("active");
  signUpPane.classList.add("active");
  signUpBtn.classList.add("active");

  resetSignUpForm();
});

submitLoginBtn.addEventListener("click", () => {
  let loginValid = true;
  loginFields.forEach((item) => {
    const feedback = document.getElementById(item.id + "_feedback");
    const isValid = item.value.trim().length !== 0;
    const borderColor = isValid ? "green" : "red";
    const messageColor = isValid ? "green" : "red";
    const messageText = isValid ? "Correct !!" : "Invalid value !!";

    item.style.border = `1px solid ${borderColor}`;
    feedback.style.color = messageColor;
    feedback.innerText = messageText;

    if (!isValid) {
      loginValid = false;
    }
  });

  if (loginValid) {
    resetLoginForm();
    loginFields.forEach((item) => {
      item.value = "";
    });
    modal.style.display = "none";
  }
});

submitSignUpBtn.addEventListener("click", () => {
  let signUpValid = true;
  signUpFields.forEach((item) => {
    const feedback = document.getElementById(item.id + "_feedback");
    let isValid;
    if (item === document.getElementById("captcha")) {
      isValid = item.value.trim() === captcha;
    } else {
      isValid = item.value.trim().length !== 0;
    }
    const borderColor = isValid ? "green" : "red";
    const messageColor = isValid ? "green" : "red";
    const messageText = isValid ? "Correct !!" : "Invalid value !!";

    item.style.border = `1px solid ${borderColor}`;
    feedback.style.color = messageColor;
    feedback.innerText = messageText;

    if (!isValid) {
      signUpValid = false;
    }
  });

  signUpSelects.forEach((item) => {
    const feedback = document.getElementById(item.id + "_feedback");
    const isValid = item.value !== "Mặc định";
    const borderColor = isValid ? "green" : "red";
    const messageColor = isValid ? "green" : "red";
    const messageText = isValid ? "Correct !!" : "Invalid value !!";

    item.style.border = `1px solid ${borderColor}`;
    feedback.style.color = messageColor;
    feedback.innerText = messageText;

    if (!isValid) {
      signUpValid = false;
    }
  });

  if (signUpValid) {
    modal.style.display = "none";
  }
});

const resetLoginForm = () => {
  loginFields.forEach((item) => {
    const feedback = document.getElementById(item.id + "_feedback");

    item.style.border = `1px solid rgba(0, 0, 0, 0.175)`;
    feedback.innerText = "";
  });
};

const resetSignUpForm = () => {
  signUpFields.forEach((item) => {
    const feedback = document.getElementById(item.id + "_feedback");

    item.style.border = `1px solid rgba(0, 0, 0, 0.175)`;
    feedback.innerText = "";
  });

  signUpSelects.forEach((item) => {
    const feedback = document.getElementById(item.id + "_feedback");

    item.style.border = `1px solid #dee2e6`;
    feedback.innerText = "";
  });
};
