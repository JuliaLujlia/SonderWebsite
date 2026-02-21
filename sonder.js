document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("a11y-toggle");
  if (!toggleBtn) return;

  const iconOff = toggleBtn.querySelector('[data-icon="off"]');
  const iconOn = toggleBtn.querySelector('[data-icon="on"]');

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const storedMode = localStorage.getItem("a11yMode");

  // 👉 Initialer Zustand bestimmen
  const isReducedMotion = motionQuery.matches;
  const isStoredActive = storedMode === "active";

  // Reduced Motion hat Vorrang
  const shouldBeActive = isReducedMotion || isStoredActive;

  setState(shouldBeActive);

  toggleBtn.addEventListener("click", function () {
    const isActive = !document.body.classList.contains("accessible-mode");
    localStorage.setItem("a11yMode", isActive ? "active" : "inactive");
    setState(isActive);
  });

  motionQuery.addEventListener("change", (e) => {
    if (e.matches) {
      localStorage.setItem("a11yMode", "active");
      setState(true);
    }
  });

  function setState(isActive) {
    document.body.classList.toggle("accessible-mode", isActive);
    toggleBtn.setAttribute("aria-pressed", String(isActive));

    if (isActive) {
      iconOff.classList.add("is-hidden");
      iconOn.classList.remove("is-hidden");
    } else {
      iconOff.classList.remove("is-hidden");
      iconOn.classList.add("is-hidden");
    }
  }
});
