import { createDivElementWithClass } from "../util/dom.js";
import { createMovieTypeSelectElement } from "./dropdown.js";

export function createMovieListToolbar() {
  const movieWrapper = createDivElementWithClass("movie-toolbar-wrapper");
  const container = createDivElementWithClass("container");
  const flexDiv = createDivElementWithClass("d-flex justify-content-between align-items-center w-100");

  flexDiv.appendChild(createButtonsWrapper());
  flexDiv.appendChild(createMovieTypeSelectElement());
  container.appendChild(flexDiv);
  movieWrapper.appendChild(container);

  return movieWrapper;
}

function createButtonsWrapper() {
  const buttonsWrapper = createDivElementWithClass("d-flex gap-2");

  buttonsWrapper.appendChild(createGridButtonElement());
  buttonsWrapper.appendChild(createListButtonElement());

  return buttonsWrapper;
}

function createGridButtonElement() {
  const button = document.createElement("button");
  button.setAttribute("id", "movie-grid-btn");
  button.setAttribute("type", "button");
  button.classList.add("btn", "btn-icon");

  const img = document.createElement("img");
  img.setAttribute("src", "/grid-layout.svg");
  img.setAttribute("alt", "Grid view");

  button.appendChild(img);
  return button;
}

function createListButtonElement() {
  const button = document.createElement("button");
  button.setAttribute("id", "movie-list-btn");
  button.setAttribute("type", "button");
  button.classList.add("btn", "btn-icon");

  const img = document.createElement("img");
  img.setAttribute("src", "/list-layout.svg");
  img.setAttribute("alt", "List view");

  button.appendChild(img);
  return button;
}
