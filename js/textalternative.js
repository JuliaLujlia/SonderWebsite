const buttons_dropdown = document.querySelectorAll(".dropdown");
const buttons_dropup = document.querySelectorAll(".dropup");
const text = document.querySelectorAll(".textalternative");

// When a `.dropdown` is pressed:
// - show the related `.text` (remove `is-hidden`)
// - show the related `.dropup` (remove `is-hidden`)
// - hide the `.dropdown` (add `is-hidden`)
// The reverse happens when a `.dropup` is pressed.

function showTextAlternative(dropdownBtn) {
  const container = dropdownBtn.closest(".container_textalternative");
  const dropupBtn = container?.querySelector(".dropup");
  const panel = container?.querySelector(".textalternative");

  panel?.classList.remove("is-hidden");
  dropupBtn?.classList.remove("is-hidden");

  // Fokus rüber, bevor dropdown verschwindet
  dropupBtn?.focus();

  dropdownBtn.classList.add("is-hidden");
  dropdownBtn.setAttribute("aria-expanded", "true");
  dropupBtn?.setAttribute("aria-expanded", "true");
}


function hideTextAlternative(dropupBtn) {
  text.forEach((txt) => txt.classList.add("is-hidden"));
  buttons_dropdown.forEach((btn) => btn.classList.remove("is-hidden"));
  dropupBtn.classList.add("is-hidden");

  buttons_dropdown.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
  dropupBtn.setAttribute("aria-expanded", "false");
}

function handleKeyActivation(e) {
  const key = e.key;
  if (key === "Enter" || key === " ") {
    e.preventDefault();
    e.currentTarget.click();
  }
}

// Attach click and keyboard handlers to dropdown buttons
buttons_dropdown.forEach((btn) => {
  btn.setAttribute("role", "button");
  if (!btn.hasAttribute("tabindex")) btn.setAttribute("tabindex", "0");
  btn.setAttribute("aria-expanded", "false");
  btn.addEventListener("click", () => showTextAlternative(btn));
  btn.addEventListener("keydown", handleKeyActivation);
});

// Attach click and keyboard handlers to dropup buttons
buttons_dropup.forEach((btn) => {
  btn.setAttribute("role", "button");
  if (!btn.hasAttribute("tabindex")) btn.setAttribute("tabindex", "0");
  btn.setAttribute("aria-expanded", "false");
  btn.addEventListener("click", () => hideTextAlternative(btn));
  btn.addEventListener("keydown", handleKeyActivation);
});

// Initial setup: ensure dropups and text start hidden and ARIA states are consistent
function initialSetup() {
  document.querySelectorAll(".dropup").forEach((el) => el.classList.add("is-hidden"));
  document.querySelectorAll(".textalternative").forEach((el) => el.classList.add("is-hidden"));
  document.querySelectorAll(".dropdown").forEach((el) => el.setAttribute("aria-expanded", "false"));
  document.querySelectorAll(".dropup").forEach((el) => el.setAttribute("aria-expanded", "false"));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialSetup);
} else {
  initialSetup();
}
