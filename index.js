const mobile_nav = document.querySelector(".mobile_nav_btn")
const nav_header = document.querySelector(".all")

const toggleNavBar = () => {
  nav_header.classList.toggle("active")
}

mobile_nav.addEventListener("click", () => {
  toggleNavBar()
})

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav_middle a")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav_header.classList.contains("active")) {
      toggleNavBar()
    }
  })
})

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const isNavButton = event.target.closest(".mobile_nav_btn")
  const isNavMenu = event.target.closest(".nav_middle")

  if (!isNavButton && !isNavMenu && nav_header.classList.contains("active")) {
    toggleNavBar()
  }
})
