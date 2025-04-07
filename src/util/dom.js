export function createDivElementWithClass(classNames) {
  const div = document.createElement("div");
  div.className = classNames;
  return div;
}

export function getAppElem() {
  return document.getElementById("app");
}
