const info = document.querySelector(".info");
const dropDown = document.querySelector(".drop-down");

info.addEventListener("click", () => {
  dropDown.classList.toggle("active");
});
