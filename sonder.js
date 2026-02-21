document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("a11y-toggle");
  if (!toggleBtn) return;

  const iconOff = toggleBtn.querySelector('[data-icon="off"]');
  const iconOn = toggleBtn.querySelector('[data-icon="on"]');

  const isStoredActive = localStorage.getItem("a11yMode") === "active";

  // Initialer Zustand (inkl. Body-Class!)
  setState(isStoredActive);

  toggleBtn.addEventListener("click", function () {
    const isActive = !document.body.classList.contains("accessible-mode");
    localStorage.setItem("a11yMode", isActive ? "active" : "inactive");
    setState(isActive);
  });

  function setState(isActive) {
    // Modus wirklich setzen (wichtig für Reload!)
    document.body.classList.toggle("accessible-mode", isActive);

    // ARIA + Icons
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
