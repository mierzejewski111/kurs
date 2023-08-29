const div = document.querySelector("div");

let active = false;

let divX = 150;
let divY = 150;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let insertDivX;
let insertDivY;

div.addEventListener("mousedown", (e) => {
  div.style.backgroundColor = "grey";
  active = true;
  insertDivX = e.offsetX;
  insertDivY = e.offsetY;
});

div.addEventListener("mousemove", (e) => {
  if (active) {
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;
    div.style.left = `${divX}px`;
    div.style.top = `${divY}px`;
  }
});

div.addEventListener("mouseup", () => {
  div.style.backgroundColor = "black";
  active = false;
});
