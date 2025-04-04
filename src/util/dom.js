export function createDivElementWithClass(classList) {
  const div = document.createElement("div");

  if (Array.isArray(classList)) {
    div.classList.add(...classList);
  } else if (typeof classList === "string") {
    div.classList.add(...classList.split(" "));
  }

  return div;
}

export function getAppElem() {
  return document.getElementById("app");
}
