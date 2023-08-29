const btn = document.querySelectorAll("button")[0];
const list = [...document.getElementsByTagName("li")];

let size = 10;

const change = function () {
  list.forEach((item) => {
    item.style.display = "block";
    item.style.fontSize = `${size}px`;
  });
  size++;
};

btn.addEventListener("click", change);
