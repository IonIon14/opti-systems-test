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
