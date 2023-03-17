// menubar script
const openMenuButton = document.querySelector(".openMenuButton");
const openButton = document.querySelector(".openButton");
const closeButton = document.querySelector(".closeButton");
const mobileMenu = document.querySelector(".menuItems");
const menuItems = document.querySelectorAll(".menuItems li");
/*=============================DropDown===================================*/
const dropDrown = document.querySelector(".dropDrown");
const dropChild = document.querySelector(".dropChild");

/*============onscroll============*/
window.onscroll = () => {
  dropChild.classList.add("scale-y-0");
  mobileMenu.classList.add("off");
  openButton.classList.remove("hidden");
  closeButton.classList.add("hidden");
};
/*============toggleButton============*/
function toggleButton() {
  openMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("off");
    // click button class effects
    openButton.classList.toggle("hidden");
    closeButton.classList.toggle("hidden");
  });
  toggleMenuBar();
}
/*============toggleMenuBar============*/
function toggleMenuBar() {
  menuItems.forEach((item, itemId, allItem) => {
    item.addEventListener("click", () => {
      allItem.forEach((e) => {
        e.classList.remove("active");
      });
      // =======================================
      item.classList.add("active");
      mobileMenu.classList.add("off");
      openButton.classList.toggle("hidden");
      closeButton.classList.toggle("hidden");
    });
  });
}
/*============dropDrownItems============*/
function dropDrownItems() {
  dropDrown.addEventListener("click", () => {
    dropChild.classList.toggle("scale-y-0");
  });
}
/*============accountManesing============*/
function accountManesing() {
  let closeFrom = document.querySelectorAll(".closeBtn");

  document.querySelector(".login").addEventListener("click", function () {
    document.querySelector(".supportSection").classList.toggle("hidden");
    document.querySelector(".accountLogin").classList.remove("hidden");
    document.querySelector(".accountFrom").classList.add("hidden");
    closeFrom.forEach((e) => {
      e.addEventListener("click", function () {
        document.querySelector(".accountLogin").classList.add("hidden");
        document.querySelector(".accountFrom").classList.add("hidden");
        document.querySelector(".supportSection").classList.add("hidden");
      });
    });
  });
  document.querySelector(".register").addEventListener("click", function () {
    document.querySelector(".supportSection").classList.toggle("hidden");
    document.querySelector(".accountFrom").classList.remove("hidden");
    document.querySelector(".accountLogin").classList.add("hidden");
    closeFrom.forEach((e) => {
      e.addEventListener("click", function () {
        document.querySelector(".accountLogin").classList.add("hidden");
        document.querySelector(".accountFrom").classList.add("hidden");
        document.querySelector(".supportSection").classList.add("hidden");
      });
    });
  });
}

/*============Function Colling============*/
toggleButton();
dropDrownItems();
accountManesing();
