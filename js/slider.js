const buttons = document.querySelectorAll(".slide-btn");
const slides = document.querySelectorAll(".inner_part");

let activeSlide = 1;

function showSlide(index) {
  activeSlide = index;

  slides.forEach((slide) => {
    slide.classList.toggle("is-active", slide.dataset.slide == index);
  });

  buttons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.slide == index);
  });

  // Set aria-current
  buttons.forEach((btn) => {
    if (btn.dataset.slide == index) {
      btn.setAttribute("aria-current", "true");
    } else {
      btn.removeAttribute("aria-current");
    }
  });
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    showSlide(btn.dataset.slide);
  });
});

// Initial Slide
showSlide(activeSlide);
