const showModalBtn = document.getElementById("show_btn");
const hideModalBtn = document.getElementById("close_btn");
const hideModalBtn2 = document.getElementById("close_btn2");
const modal = document.getElementById("modal");

showModalBtn.onclick = () => {
  modal.style.display = "block";
};

hideModalBtn.onclick = () => {
  modal.style.display = "none";
};

hideModalBtn2.onclick = () => {
  modal.style.display = "none";
};
