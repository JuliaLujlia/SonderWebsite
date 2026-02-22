const video = document.querySelector("video.player");

function parseT(hash) {
  // erwartet #t=660,969 oder #t=660
  const m = (hash || "").match(/#t=(\d+(?:\.\d+)?)(?:,(\d+(?:\.\d+)?))?/);
  if (!m) return null;
  return { start: parseFloat(m[1]), end: m[2] ? parseFloat(m[2]) : null };
}

const t = parseT(location.hash);

if (video && t) {
  video.addEventListener("loadedmetadata", () => {
    // Seek zum Start
    video.currentTime = Math.max(0, Math.min(t.start, video.duration || t.start));
  });

  // Optional: hart bei Endzeit stoppen (falls angegeben)
  if (t.end != null) {
    video.addEventListener("timeupdate", () => {
      if (video.currentTime >= t.end) {
        video.pause();
      }
    });
  }
}
