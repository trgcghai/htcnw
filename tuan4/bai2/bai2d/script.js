const submitBtn = document.getElementById("submit_btn");
const inputFields = document.querySelectorAll(".form-control");
const checkBoxAgree = document.querySelector(".form-check-input");
const checkBoxLabel = document.querySelector(".form-check-label");

const handleSubmitForm = () => {
  inputFields.forEach((item) => {
    const message = document.getElementById(item.id + "_message");
    const isValid = item.value.trim().length !== 0;
    const borderColor = isValid ? "green" : "red";
    const messageColor = isValid ? "rgb(19, 190, 19)" : "red";
    const messageText = isValid
      ? "Looks good !"
      : "Please provide valid value.";

    item.style.border = `1px solid ${borderColor}`;
    message.style.color = messageColor;
    message.innerText = messageText;
  });

  const checkBoxMessage = document.getElementById(
    checkBoxAgree.id + "_message"
  );
  const messageCheckboxColor = !checkBoxAgree.checked
    ? "red"
    : "rgb(19, 190, 19)";
  const messageCheckboxText = !checkBoxAgree.checked
    ? "You must agree before submitting"
    : "Looks good";
  checkBoxMessage.style.color = messageCheckboxColor;
  checkBoxMessage.innerText = messageCheckboxText;
  checkBoxLabel.style.color = messageCheckboxColor;
};

const handleCheckBox = () => {
  const checkBoxMessage = document.getElementById(
    checkBoxAgree.id + "_message"
  );

  if (checkBoxMessage.innerText.trim().length === 0) {
    return;
  }

  const messageCheckboxColor = !checkBoxAgree.checked
    ? "red"
    : "rgb(19, 190, 19)";
  const messageCheckboxText = !checkBoxAgree.checked
    ? "You must agree before submitting"
    : "Looks good";
  checkBoxMessage.style.color = messageCheckboxColor;
  checkBoxMessage.innerText = messageCheckboxText;
  checkBoxLabel.style.color = messageCheckboxColor;
};

const handleChangeInput = (item) => {
  const message = document.getElementById(item.id + "_message");

  if (message.innerText.trim().length === 0) {
    return;
  }

  const isValid = item.value.trim().length !== 0;
  const borderColor = isValid ? "green" : "red";
  const messageColor = isValid ? "rgb(19, 190, 19)" : "red";
  const messageText = isValid ? "Looks good !" : "Please provide valid value.";

  item.style.border = `1px solid ${borderColor}`;
  message.style.color = messageColor;
  message.innerText = messageText;
};

inputFields.forEach((field) => {
  field.addEventListener("change", () => {
    handleChangeInput(field);
  });
});

submitBtn.onclick = () => {
  handleSubmitForm();
};

checkBoxAgree.addEventListener("change", () => {
  handleCheckBox();
});
