const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(el => el.classList.remove("active"));
    link.classList.add("active");
  });
});

function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}
