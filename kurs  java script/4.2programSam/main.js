let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green}, ${blue})`;

const changeColor = (e) => {
  //   if (e.which === 38 && red <= 255) {
  //     red += 3;
  //     green += 3;
  //     blue += 3;
  //     document.body.style.backgroundColor = `rgb(${red},${green}, ${blue})`;
  //   } else if (e.which === 40 && red >= 0) {
  //     red -= 3;
  //     green -= 3;
  //     blue -= 3;
  //     document.body.style.backgroundColor = `rgb(${red},${green}, ${blue})`;
  //   }

  switch (e.which) {
    case 38:
      document.body.style.backgroundColor = `rgb(${
        red <= 255 ? (red += 3) : red
      },${green <= 255 ? (green += 3) : green}, ${
        blue <= 255 ? (blue += 3) : blue
      })`;
      break;
    case 40:
      document.body.style.backgroundColor = `rgb(${
        red >= 0 ? (red -= 3) : red
      },${green >= 0 ? (green -= 3) : green}, ${
        blue >= 0 ? (blue -= 3) : blue
      })`;
      break;
  }
};

window.addEventListener("keydown", changeColor);
