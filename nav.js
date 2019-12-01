const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
//  const content = document.querySelector(".content");
//  const title = document.querySelector(".title");

  burger.addEventListener("click", () => {
//    content.style.display = "none";
//    title.style.display = "none";

    nav.classList.toggle("sidebar-active");

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
