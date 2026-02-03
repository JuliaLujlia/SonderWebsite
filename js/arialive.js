const videolink = document.getElementById("skipToSlideshow");
const status_skipvideo = document.getElementById("skipvideo-status");

const btn_dropdown = document.getElementById("ShowText");
const status_expandedText = document.getElementById("textexpanded-status");

const btn_dropup = document.getElementById("HideText");
const status_hideText = document.getElementById("texthide-status");

const btn_stopSlide = document.getElementById("StopSlideshow");
const status_stopSlide = document.getElementById("stopslideshow-status");

const btn_startSlide = document.getElementById("StartSlideshow");
const status_startSlide = document.getElementById("startslideshow-status");

const btn_slide1 = document.getElementById("btn-slide1");
const status_slide1 = document.getElementById("slide1-status");

const btn_slide2 = document.getElementById("btn-slide2");
const status_slide2 = document.getElementById("slide2-status");

const btn_slide3 = document.getElementById("btn-slide3");
const status_slide3 = document.getElementById("slide3-status");

const btn_slide4 = document.getElementById("btn-slide4");
const status_slide4 = document.getElementById("slide4-status");

const btn_prevSlide = document.getElementById("ToPrevSlide");
const status_prevSlide = document.getElementById("prevslide-status");

const btn_nextSlide = document.getElementById("ToNextSlide");
const status_nextSlide = document.getElementById("nextslide-status");

videolink.addEventListener("click", () => {
  // leeren, damit wiederholt vorgelesen wird
  status_skipvideo.textContent = "";
  setTimeout(() => {
    status_skipvideo.textContent = "skipped to slideshow";
  }, 50);
});

btn_dropdown.addEventListener("click", () => {
  // leeren, damit wiederholt vorgelesen wird
  status_expandedText.textContent = "";
  setTimeout(() => {
    status_expandedText.textContent = "text alternative expanded";

    btn_dropup.focus();
  }, 50);
});

btn_dropup.addEventListener("click", () => {
  // leeren, damit wiederholt vorgelesen wird
  status_hideText.textContent = "";
  setTimeout(() => {
    status_hideText.textContent = "text alternative hidden";

    btn_dropdown.focus();
  }, 50);
});

btn_stopSlide.addEventListener("click", () => {
  // leeren, damit wiederholt vorgelesen wird
  status_stopSlide.textContent = "";
  setTimeout(() => {
    status_stopSlide.textContent = "autoplay slideshow stopped";

    btn_startSlide.focus();
  }, 50);
});

btn_startSlide.addEventListener("click", () => {
  // leeren, damit wiederholt vorgelesen wird
  status_startSlide.textContent = "";
  setTimeout(() => {
    status_startSlide.textContent = "autoplay slideshow started";
  }, 50);
});

btn_slide1.addEventListener("click", () => {
  // leeren, damit wiederholt vorgelesen wird
  status_slide1.textContent = "";
  setTimeout(() => {
    status_slide1.textContent = "switched to slide 1";
  }, 50);
});

btn_slide2.addEventListener("click", () => {
  // leeren, damit wiederholt vorgelesen wird
  status_slide2.textContent = "";
  setTimeout(() => {
    status_slide2.textContent = "switched to slide 2";
  }, 50);
});

btn_slide3.addEventListener("click", () => {
  // leeren, damit wiederholt vorgelesen wird
  status_slide3.textContent = "";
  setTimeout(() => {
    status_slide3.textContent = "switched to slide 3";
  }, 50);
});

btn_slide4.addEventListener("click", () => {
  // leeren, damit wiederholt vorgelesen wird
  status_slide4.textContent = "";
  setTimeout(() => {
    status_slide4.textContent = "switched to slide 4";
  }, 50);
});

btn_prevSlide.addEventListener("click", () => {
  // leeren, damit wiederholt vorgelesen wird
  status_prevSlide.textContent = "";
  setTimeout(() => {
    status_prevSlide.textContent = "switched to previous slide";
  }, 50);
});

btn_nextSlide.addEventListener("click", () => {
  // leeren, damit wiederholt vorgelesen wird
  status_nextSlide.textContent = "";
  setTimeout(() => {
    status_nextSlide.textContent = "switched to next slide";
  }, 50);
});
