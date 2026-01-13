const buttons = document.querySelectorAll(".slide-btn");
const buttons_prev = document.querySelectorAll(".arrow-prev");
const buttons_next = document.querySelectorAll(".arrow-next");
const slides = document.querySelectorAll(".inner_part");
const autoplay_start = document.querySelectorAll(".autoplay-start");
const autoplay_stop = document.querySelectorAll(".autoplay-stop");

let activeSlide = "1"; // Als String, wie data-slide
let autoPlayInterval;
const SLIDE_INTERVAL = 5000;

function showSlide(index) {
  console.log(index);
  activeSlide = String(index); // In String konvertieren

  const slideCount = slides.length;
  const slideIndex = parseInt(index);

  if (slideIndex > slideCount) activeSlide = "1";
  if (slideIndex < 0) activeSlide = "4";

  slides.forEach((slide) => slide.classList.remove("is-active"));
  buttons.forEach((btn) => btn.classList.remove("is-active"));

  slides.forEach((slide) => {
    slide.classList.toggle("is-active", slide.dataset.slide == activeSlide);
  });

  buttons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.slide == activeSlide);

    if (btn.dataset.slide == activeSlide) {
      btn.setAttribute("aria-current", "true");
    } else {
      btn.removeAttribute("aria-current");
    }
  });

  // Prev ausblenden
  buttons_prev.forEach((btn) => {
    if (activeSlide === "1") {
      btn.disabled = true;
      btn.setAttribute("aria-disabled", "true");
      btn.classList.add("is-hidden");
    } else {
      btn.disabled = false;
      btn.removeAttribute("aria-disabled");
      btn.classList.remove("is-hidden");
    }
  });

  // Next ausblenden
  buttons_next.forEach((btn) => {
    if (activeSlide === "4") {
      btn.disabled = true;
      btn.setAttribute("aria-disabled", "true");
      btn.classList.add("is-hidden");
    } else {
      btn.disabled = false;
      btn.removeAttribute("aria-disabled");
      btn.classList.remove("is-hidden");
    }
  });
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    showSlide(btn.dataset.slide);
    resetAutoPlay();
  });
});

buttons_prev.forEach((btn) => {
  btn.addEventListener("click", () => {
    showSlide(parseInt(activeSlide) - 1);
    resetAutoPlay();
  });
});

buttons_next.forEach((btn) => {
  btn.addEventListener("click", () => {
    showSlide(parseInt(activeSlide) + 1);
    resetAutoPlay();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") showSlide(parseInt(activeSlide) - 1);
  if (e.key === "ArrowRight") showSlide(parseInt(activeSlide) + 1);
});

function autoPlay() {
  showSlide(parseInt(activeSlide) + 1);
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(autoPlay, SLIDE_INTERVAL);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide("1");
  autoPlayInterval = setInterval(autoPlay, SLIDE_INTERVAL);
  // Start-Button mit is-hidden initialisieren
  autoplay_start.forEach((btn) => {
    btn.classList.add("is-hidden");
  });
});

autoplay_start.forEach((btn) => {
  btn.addEventListener("click", () => {
    autoPlayInterval = setInterval(autoPlay, SLIDE_INTERVAL);
    btn.setAttribute("aria-pressed", "false");
    btn.classList.add("is-hidden");

    // Stop-Button sichtbar machen
    autoplay_stop.forEach((stopBtn) => {
      stopBtn.classList.remove("is-hidden");
    });
  });
});

autoplay_stop.forEach((btn) => {
  btn.addEventListener("click", () => {
    clearInterval(autoPlayInterval);
    btn.setAttribute("aria-pressed", "true");
    btn.classList.add("is-hidden");

    // Start-Button sichtbar machen
    autoplay_start.forEach((startBtn) => {
      startBtn.classList.remove("is-hidden");
    });
  });
});
