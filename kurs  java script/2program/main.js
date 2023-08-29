const square = document.createElement("div");
document.body.appendChild(square);

let abc = true;

let size = 10;
square.style.width = `${size}px`;
square.style.height = `${size}px`;

const change = function () {
  if (size > window.innerHeight / 2) {
    abc = !abc;
  } else if (size === 0) {
    abc = !abc;
  }

  if (abc) {
    size += 5;
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
  } else {
    size -= 5;
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
  }
};

window.addEventListener("scroll", change);
