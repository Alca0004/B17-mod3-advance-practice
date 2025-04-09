let currentLayout = "grid";

export function layoutToggle(callback) {
  const gridBtn = document.getElementById("movie-grid-btn");
  const listBtn = document.getElementById("movie-list-btn");

  if (gridBtn) {
    gridBtn.addEventListener("click", () => {
      currentLayout = "grid";
      gridBtn.classList.add("active");
      listBtn.classList.remove("active");
      callback();
    });
  }

  if (listBtn) {
    listBtn.addEventListener("click", () => {
      currentLayout = "list";
      listBtn.classList.add("active");
      gridBtn.classList.remove("active");
      callback();
    });
  }
}

export function getCurrentLayout() {
  return currentLayout;
}
