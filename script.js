var typed = new Typed(".text", {
  strings: ["Web Developer", "Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// const navbar = document.querySelectorAll(".header .navbar a");
// const sec = document.querySelectorAll("section");
// // function activeMenu() {
// //   let len = sec.length;
// //   while (--len && window.scroll + 97 < sec[len].offsetTop) {}
// //   navbar.forEach((ltx) => ltx.classList.remove("active"));
// //   navbar.classList.add("active");
// // }
// // activeMenu();
// // window.addEventListener("scroll", activeMenu());
// let currentSection = "";
// window.addEventListener("scroll", () => {
//   sec.forEach((sc) => {
//     if (window.scrollY >= sc.offsetTop - sc.clientHeight / 2) {
//       currentSection = sc.id;
//     }
//   });
//   navbar.forEach((nav) => {
//     if (nav.href.includes(currentSection)) {
//       document.querySelector(".active").classList.remove(".active");
//       nav.classList.add("active");
//     }
//   });
// });
