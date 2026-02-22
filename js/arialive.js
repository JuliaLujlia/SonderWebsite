const videolink = document.getElementById("skipToSlideshow");
const status_skipvideo = document.getElementById("skipvideo-status");

const videolinkHome = document.getElementById("skipToIntroSection");
const status_skipvideoHome = document.getElementById("skipvideo-home-status");

const linkTextInfo = document.getElementById("skipToTextInfo");
const status_skipTextInfo = document.getElementById("skipvideo-act-status");

const linkNav = document.getElementById("skipToMainContent");
const status_skipNav = document.getElementById("skipnav-status");

const btn_dropdown = document.getElementById("ShowText");
const status_expandedText = document.getElementById("textexpanded-status");

const btn_dropup = document.getElementById("HideText");
const status_hideText = document.getElementById("texthide-status");

const a11yToggle = document.getElementById("a11y-toggle");
const a11yStatus = document.getElementById("status_ally");

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

const body = document.body;

if (videolink && status_skipvideo) {
  videolink.addEventListener("click", () => {
    // leeren, damit wiederholt vorgelesen wird
    status_skipvideo.textContent = "";
    setTimeout(() => {
      status_skipvideo.textContent = "skipped to slideshow";
    }, 50);
  });
}

if (videolinkHome && status_skipvideoHome) {
  videolinkHome.addEventListener("click", () => {
    // leeren, damit wiederholt vorgelesen wird
    status_skipvideoHome.textContent = "";
    setTimeout(() => {
      status_skipvideoHome.textContent = "skipped to intro section";
    }, 50);
  });
}

if (linkTextInfo && status_skipTextInfo) {
  linkTextInfo.addEventListener("click", () => {
    // leeren, damit wiederholt vorgelesen wird
    status_skipTextInfo.textContent = "";
    setTimeout(() => {
      status_skipTextInfo.textContent = "skipped to something to think about";
    }, 50);
  });
}

if (linkNav && status_skipNav) {
  linkNav.addEventListener("click", () => {
    // leeren, damit wiederholt vorgelesen wird
    status_skipNav.textContent = "";
    setTimeout(() => {
      status_skipNav.textContent = "skipped to main content";
    }, 50);
  });
}

if (btn_dropdown && status_expandedText) {
  btn_dropdown.addEventListener("click", () => {
    // leeren, damit wiederholt vorgelesen wird
    status_expandedText.textContent = "";
    setTimeout(() => {
      status_expandedText.textContent = "text alternative expanded";

      btn_dropup.focus();
    }, 50);
  });
}

if (btn_dropup && status_hideText) {
  btn_dropup.addEventListener("click", () => {
    // leeren, damit wiederholt vorgelesen wird
    status_hideText.textContent = "";
    setTimeout(() => {
      status_hideText.textContent = "text alternative hidden";

      btn_dropdown.focus();
    }, 50);
  });
}

if (a11yToggle && a11yStatus) {
  a11yToggle.addEventListener("click", () => {
    // leeren, damit wiederholt vorgelesen wird
    a11yStatus.textContent = "";

    // sonder.js schaltet den Modus im selben Click um
    // -> wir lesen NACH dem Umschalten den Endzustand aus
    setTimeout(() => {
      const isActive = document.body.classList.contains("accessible-mode");
      // alternativ (wenn du lieber am Button hängst):
      // const isActive = a11yToggle.getAttribute("aria-pressed") === "true";

      a11yStatus.textContent = isActive ? "accessibility mode on" : "accessibility mode off";

      // Fokus optional – meist lässt man ihn auf dem Toggle:
      // a11yToggle.focus();
    }, 50);
  });
}

if (btn_stopSlide && status_stopSlide) {
  btn_stopSlide.addEventListener("click", () => {
    // leeren, damit wiederholt vorgelesen wird
    status_stopSlide.textContent = "";
    setTimeout(() => {
      status_stopSlide.textContent = "autoplay slideshow stopped";

      btn_startSlide.focus();
    }, 50);
  });
}

if (btn_startSlide && status_startSlide) {
  btn_startSlide.addEventListener("click", () => {
    // leeren, damit wiederholt vorgelesen wird
    status_startSlide.textContent = "";
    setTimeout(() => {
      status_startSlide.textContent = "autoplay slideshow started";

      btn_stopSlide.focus();
    }, 50);
  });
}

if (btn_slide1 && status_slide1) {
  btn_slide1.addEventListener("click", () => {
    // leeren, damit wiederholt vorgelesen wird
    status_slide1.textContent = "";
    setTimeout(() => {
      status_slide1.textContent = "switched to slide 1";
    }, 50);
  });
}

if (btn_slide2 && status_slide2) {
  btn_slide2.addEventListener("click", () => {
    // leeren, damit wiederholt vorgelesen wird
    status_slide2.textContent = "";
    setTimeout(() => {
      status_slide2.textContent = "switched to slide 2";
    }, 50);
  });
}

if (btn_slide3 && status_slide3) {
  btn_slide3.addEventListener("click", () => {
    // leeren, damit wiederholt vorgelesen wird
    status_slide3.textContent = "";
    setTimeout(() => {
      status_slide3.textContent = "switched to slide 3";
    }, 50);
  });
}

if (btn_slide4 && status_slide4) {
  btn_slide4.addEventListener("click", () => {
    // leeren, damit wiederholt vorgelesen wird
    status_slide4.textContent = "";
    setTimeout(() => {
      status_slide4.textContent = "switched to slide 4";
    }, 50);
  });
}

if (btn_prevSlide && status_prevSlide) {
  btn_prevSlide.addEventListener("click", () => {
    // leeren, damit wiederholt vorgelesen wird
    status_prevSlide.textContent = "";
    setTimeout(() => {
      status_prevSlide.textContent = "switched to previous slide";
    }, 50);
  });
}

if (btn_nextSlide && status_nextSlide) {
  btn_nextSlide.addEventListener("click", () => {
    // leeren, damit wiederholt vorgelesen wird
    status_nextSlide.textContent = "";
    setTimeout(() => {
      status_nextSlide.textContent = "switched to next slide";
    }, 50);
  });
}
