const button = document.querySelector("#hamburger-button");

button.addEventListener("click", () => {
  const list = document.querySelector("#menu-responsive");
  list.classList.toggle("hidden");
  if (window.screenX > 1024) {
    list.classList.add("hidden");
  }
});

window.addEventListener("resize", () => {
  const list = document.querySelector("#menu-responsive");
  if (window.screenX > 1024) {
    list.classList.add("hidden");
  }
});

const dropdown = document.querySelector(".dropdownButton");
const dropdownList = document.querySelector("#menu-dropdown");
const dropdownListElement = document.querySelector(".dropdown-list-element");
console.log(dropdownListElement);

dropdown.addEventListener("mouseenter", () => {
  const dropdownList = document.querySelector("#menu-dropdown");
  dropdownList.classList.toggle("hidden");

  dropdownListElement.classList.toggle("bg-green-light");
});

dropdownList.addEventListener("mouseleave", () => {
  dropdownList.classList.add("hidden");
  dropdownListElement.classList.remove("bg-green-light");
});

document.addEventListener("DOMContentLoaded", function () {
  initiateHomeSlider();
  initiateSecondSlider();
});

const initiateHomeSlider = () => {
  new Splide("#one", {
    autoplay: true,
    type: "loop",
    interval: 3000,
    keyboard: "focused", //enabling keyboard for focused element
  }).mount();
};

const initiateSecondSlider = () => {
  new Splide("#two", {
    autoplay: true,
    type: "loop",
    interval: 3000,
    keyboard: "focused", //enabling keyboard for focused element
  }).mount();
};
