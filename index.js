const toggler = document.querySelector(".toggler");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

toggler.addEventListener("click", () => {
  console.log("clicked");
  nav.classList.toggle("expanded");
  toggler.classList.toggle("expanded");
  menu.classList.toggle("expanded");
});
