let currentLayout = "grid";

export function layoutToggle(callback) {
  document.getElementById("movie-grid-btn")?.addEventListener("click", () => {
    currentLayout = "grid";
    callback();
  });

  document.getElementById("movie-list-btn")?.addEventListener("click", () => {
    currentLayout = "list";
    callback();
  });
}

export function getCurrentLayout() {
  return currentLayout;
}
