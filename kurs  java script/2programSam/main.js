const blok = document.createElement("div");
document.body.appendChild(blok);

let abc = true;
let size = 5;

document.body.style.height = "100000px";
blok.style.backgroundColor = "green";
blok.style.width = "100%";
blok.style.position = "fixed";
blok.style.left = 0;
blok.style.top = 0;
blok.style.height = `${size}px`;

const change = function () {
  if (size > window.innerHeight / 2) {
    abc = !abc;
    blok.style.backgroundColor = "red";
  } else if (size <= 0) {
    abc = !abc;
    blok.style.backgroundColor = "green";
  }
  if (abc) {
    size += 5;
  } else {
    size -= 5;
  }
  blok.style.height = `${size}px`;
};

window.addEventListener("scroll", change);
