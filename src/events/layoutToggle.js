let currentLayout = "grid";

export function layoutToggle(callback) {
  const gridBtn = document.getElementById("movie-grid-btn");
  const listBtn = document.getElementById("movie-list-btn");

  gridBtn?.addEventListener("click", () => {
    currentLayout = "grid";
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
    callback(); // re-render
  });

  listBtn?.addEventListener("click", () => {
    currentLayout = "list";
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
    callback(); // re-render
  });
}

export function getCurrentLayout() {
  return currentLayout;
}
