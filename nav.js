const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const homeButton = document.querySelectorAll(".home");
  const aboutButton = document.querySelectorAll(".about");
  const menuButton = document.querySelectorAll(".menu");
  const surveyButton = document.querySelectorAll(".survey");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          1}s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();
