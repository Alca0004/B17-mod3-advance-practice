export function createDivElementWithClass(classNames) {
  const div = document.createElement("div");
  div.className = classNames;
  return div;
}

export function getAppElem() {
  return document.getElementById("app");
}

export function createElemWithClass(tag, classNames) {
  const elem = document.createElement(tag);
  elem.className = classNames;
  return elem;
}

export function createImgWithClass(src, alt, classNames) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.className = classNames;
  return img;
}

export function createTextElem(tag, classNames, text) {
  const elem = document.createElement(tag);
  elem.className = classNames;
  elem.textContent = text;
  return elem;
}
