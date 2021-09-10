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

dropdown.addEventListener("mouseover", () => {
  const dropdownList = document.querySelector("#menu-dropdown");
  dropdownList.classList.toggle("hidden");
});

dropdownList.addEventListener("mouseleave", () => {
  
  dropdownList.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  global_carousel__ctrl();
});

const slider_one = () => {
  const one = new Splide("#one", {
    autoplay: false,
    pagination:false,
    keyboard: "focused", //enabling keyboard for focused element
  }).mount();
};

const slider_two = () => {
  const two = new Splide("#two", {
    autoplay: false,
    pagination:false,
    keyboard: "focused", //enabling keyboard for focused element
  }).mount();
};

//alternate way of triggering carousels in muiltiple instances
const global_carousel__ctrl = () => {
  const elms = document.getElementsByClassName("splide");
  for (let i = 0; i < elms.length; i++) {
    new Splide(elms[i], {
      autoplay: false,
      keyboard: "focused", //enabling keyboard for focused element
    }).mount();
  }
};
