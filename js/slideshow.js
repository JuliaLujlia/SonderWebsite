const buttons = document.querySelectorAll(".slide-btn");
const buttons_prev = document.querySelectorAll(".arrow-prev");
const buttons_next = document.querySelectorAll(".arrow-next");
const slides = document.querySelectorAll(".inner_part");
const autoplay_start = document.querySelectorAll(".autoplay-start");
const autoplay_stop = document.querySelectorAll(".autoplay-stop");

let activeSlide = "1"; // Als String, wie data-slide
let autoPlayInterval;
let isAutoplayEnabled = true;
const SLIDE_INTERVAL = 5000;

// Überprüfe, ob der Benutzer reduzierte Bewegungen bevorzugt
function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

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

// immer aktiv
/*document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && activeSlide !== "1") showSlide(parseInt(activeSlide) - 1);
  if (e.key === "ArrowRight" && activeSlide !== "4") showSlide(parseInt(activeSlide) + 1);
});*/

//aktiv wenn fokus in Slideshow
document.addEventListener("keydown", (event) => {
  const slideshow = document.querySelector(".slideshow");
  const activeEl = document.activeElement;

  // Nur reagieren, wenn Fokus in der Slideshow ist
  if (!slideshow.contains(activeEl)) return;

  if (event.key === "ArrowLeft" && activeSlide !== "1") {
    event.preventDefault();
    showSlide(parseInt(activeSlide) - 1);
  }

  if (event.key === "ArrowRight" && activeSlide !== "4") {
    event.preventDefault();
    showSlide(parseInt(activeSlide) + 1);
  }
});

function autoPlay() {
  showSlide(parseInt(activeSlide) + 1);
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);

  if (!isAutoplayEnabled) return;
  if (prefersReducedMotion()) return;

  autoPlayInterval = setInterval(autoPlay, SLIDE_INTERVAL);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide("1");
  // Starte Autoplay nur wenn Benutzer keine reduzierten Bewegungen bevorzugt
  if (!prefersReducedMotion()) {
    autoPlayInterval = setInterval(autoPlay, SLIDE_INTERVAL);
    // Start-Button verstecken wenn Autoplay aktiv
    autoplay_start.forEach((btn) => {
      btn.classList.add("is-hidden");
    });
  } else {
    // Wenn reduce motion aktiv: Start-Button anzeigen, Stop-Button verstecken
    autoplay_start.forEach((btn) => {
      btn.setAttribute("aria-pressed", "true");
      btn.classList.remove("is-hidden");
    });
    autoplay_stop.forEach((btn) => {
      btn.setAttribute("aria-pressed", "false");
      btn.classList.add("is-hidden");
    });
  }

  // Überwache Änderungen in Bewegungspräferenzen
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addListener((e) => {
    if (e.matches) {
      // Benutzer hat jetzt reduzierte Bewegungen aktiviert
      clearInterval(autoPlayInterval);
      autoplay_start.forEach((btn) => {
        btn.setAttribute("aria-pressed", "true");
        btn.classList.remove("is-hidden");
      });
      autoplay_stop.forEach((btn) => {
        btn.setAttribute("aria-pressed", "false");
        btn.classList.add("is-hidden");
      });
    }
  });
});

autoplay_start.forEach((btn) => {
  btn.addEventListener("click", () => {
    isAutoplayEnabled = true;

    autoPlayInterval = setInterval(autoPlay, SLIDE_INTERVAL);
    btn.setAttribute("aria-pressed", "true");
    btn.classList.add("is-hidden");

    autoplay_stop.forEach((stopBtn) => {
      stopBtn.setAttribute("aria-pressed", "false");
      stopBtn.classList.remove("is-hidden");
    });
  });
});

autoplay_stop.forEach((btn) => {
  btn.addEventListener("click", () => {
    isAutoplayEnabled = false;
    clearInterval(autoPlayInterval);

    btn.setAttribute("aria-pressed", "false");
    btn.classList.add("is-hidden");

    autoplay_start.forEach((startBtn) => {
      startBtn.setAttribute("aria-pressed", "true");
      startBtn.classList.remove("is-hidden");
    });
  });
});
