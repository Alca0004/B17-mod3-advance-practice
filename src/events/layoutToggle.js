let currentLayout = "grid";

export function layoutToggle(callback) {
  const gridBtn = document.getElementById("movie-grid-btn");
  const listBtn = document.getElementById("movie-list-btn");

  const buttons = {
    grid: gridBtn,
    list: listBtn,
  };

  Object.entries(buttons).forEach(([layout, button]) => {
    button?.addEventListener("click", () => {
      currentLayout = layout;

      Object.entries(buttons).forEach(([key, btn]) => {
        btn.classList.toggle("active", key === layout);
      });

      callback();
    });
  });
}

export function getCurrentLayout() {
  return currentLayout;
}
