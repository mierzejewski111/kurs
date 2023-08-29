const btn = document.querySelector("button");
const list = document.createElement("ul");
document.body.appendChild(list);

let result = -1;
const addItem = function () {
  result += 2;
  const li = document.createElement("li");
  li.textContent = result;
  if (result % 3 !== 0) {
    list.appendChild(li);
  } else {
    li.classList.add("big");
    list.appendChild(li);
  }
};

btn.addEventListener("click", addItem);
