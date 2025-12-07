function replaceImageHosts() {
  document.querySelectorAll("img").forEach(img => {
    const oldSrc = img.src;
    if (!oldSrc) return;

    const match = oldSrc.match(/s(\d+)\./);
    if (match) {
      const newSrc = oldSrc.replace(/s(\d+)\./, "//s01.");
      img.src = newSrc;
      console.log("[Replaced]", oldSrc, "→", newSrc);
    }
  });
}

// Run once on load
replaceImageHosts();

// Also run repeatedly for lazy-loaded / infinite scroll images
const obs = new MutationObserver(replaceImageHosts);
obs.observe(document.body, { childList: true, subtree: true });
