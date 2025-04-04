export function createMovieTypeSelectElement() {
  const select = document.createElement("select");
  select.setAttribute("id", "movie-type-select");
  select.classList.add("form-select", "w-auto");

  const options = [
    { value: "now_playing", label: "Now Playing" },
    { value: "popular", label: "Popular" },
    { value: "top_rated", label: "Top Rated" },
    { value: "upcoming", label: "Upcoming" },
  ];

  options.forEach(({ value, label }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    select.appendChild(option);
  });

  return select;
}
