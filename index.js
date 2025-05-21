const mobile_nav = document.querySelector(".mobile_nav_btn");
const nav_header = document.querySelector(".all");


const toggleNavBar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => {
  toggleNavBar();
});
