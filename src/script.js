const mobileButton = document.querySelector(".mobileButton");
const mobileMenu = document.querySelector(".mobileMenu");

mobileButton.addEventListener("click", (e) => {
  mobileMenu.classList.remove();
  mobileMenu.classList.add("!block");
});
document.querySelector(".backdrop").addEventListener("click", function () {
  mobileMenu.classList.remove("!block");
});
document.querySelector(".close-navbar").addEventListener("click", function () {
  mobileMenu.classList.remove("!block");
});
