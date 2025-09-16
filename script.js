var typed = new Typed(".text", {
  strings: ["Web Developer", "Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });
  // close menu when a link is clicked
  navbar.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navbar.classList.remove("open"))
  );
}

// Active section highlight on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

function setActiveLink() {
  let top = window.scrollY + 120;
  let currentId = "";
  sections.forEach((sec) => {
    const offsetTop = sec.offsetTop;
    const height = sec.offsetHeight;
    if (top >= offsetTop && top < offsetTop + height) {
      currentId = sec.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href") || "";
    if (href === "#" + currentId) link.classList.add("active");
  });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);
