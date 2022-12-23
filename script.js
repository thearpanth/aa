const images = document.querySelectorAll(".project-image");

images.forEach((image) => {
  image.addEventListener("click", () => {
    const imageUrl = image.getAttribute("src");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const img = document.createElement("img");
    img.setAttribute("src", imageUrl);

    lightbox.appendChild
