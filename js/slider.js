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
    const innerPart = img.closest(".inner_part");
    const card = img.closest(".card");

    // Toggle is-expanded auf inner_part
    innerPart.classList.toggle("is-expanded");

    // Toggle is-expanded auf card
    card.classList.toggle("is-expanded");
  });
});

// ESC-Taste schließt vergrößertes Bild
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === "Esc") {
    // Alle inner_part mit is-expanded
    document.querySelectorAll(".inner_part.is-expanded").forEach((innerPart) => {
      innerPart.classList.remove("is-expanded");
    });

    // Alle cards mit is-expanded
    document.querySelectorAll(".card.is-expanded").forEach((card) => {
      card.classList.remove("is-expanded");
    });
  }
});

// Initial Slide
showSlide(activeSlide);
