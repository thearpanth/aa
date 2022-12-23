const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

document.addEventListener("scroll", function () {
  const currentPosition = window.scrollY + 50;
  sections.forEach((section) => {
    if (section.offsetTop <= currentPosition && section.offsetTop + section.offsetHeight > currentPosition) {
      const id = section.getAttribute("id");
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === `#${id}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
});
