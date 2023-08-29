let size = 10;
let orderElement = 1;

const init = () => {
  const btn = document.createElement("button");
  btn.textContent = "Dodaj 10  elementów listy";
  document.body.appendChild(btn);
  const btn2 = document.createElement("button");
  btn2.textContent = "Usuń";
  btn2.style.marginLeft = "10px";
  document.body.appendChild(btn2);
  btn.addEventListener("click", createLiElements);
  const ul = document.createElement("ul");
  ul.style.listStyleType = "none";
  document.body.appendChild(ul);
  btn2.addEventListener("click", remove);
};

const createLiElements = () => {
  const ul = document.querySelector("ul");
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.style.fontSize = `${size++}px`;
    li.textContent = "Element nr " + orderElement++;
    ul.appendChild(li);
  }
};

const remove = function () {
  const ul = document.querySelector("ul");
  ul.textContent = "";
  orderElement = 1;
  size = 10;
};

init();
