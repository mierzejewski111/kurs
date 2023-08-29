const btn = document.querySelector("button");

let number = 0;
const addElement = function () {
  number++;
  const div = document.createElement("div");
  div.textContent = number;
  if (number % 5 !== 0) {
    document.body.appendChild(div);
  } else {
    div.classList.add("circle");
    document.body.appendChild(div);
  }
};

btn.addEventListener("click", addElement);
