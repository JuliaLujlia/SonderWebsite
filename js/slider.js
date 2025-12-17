const buttons = document.querySelectorAll(".slide-btn");
const slides = document.querySelectorAll(".inner_part");

let activeSlide = 1;

function showSlide(index) {
  activeSlide = index;

  slides.forEach((slide) => {
    slide.classList.toggle("is-active", slide.dataset.slide == index);
  });

  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.slide == index);
  });
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    showSlide(btn.dataset.slide);
  });
});

// Bild-Klick ersetzt slideImg Checkbox
document.querySelectorAll(".img_card").forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("expanded");
  });
});

// Initial Slide
showSlide(activeSlide);
