// let position = function positionfunc() {
// [200, 100];
// },
// cat = "jarek";
// console.log(typeof position, cat);
// const arrayExample = [1];
// arrayExample[0] = [3];
//
// console.log(arrayExample[0]);
// const txt = "adam";
// console.log(txt.indexOf());
//
// let myVariable = 10;
// let myName = "Benedykt";
//
// number
// string
//
// myVariable = 11;
// myName = "Mieszko";
//
// const sum = myVariable + 5;
//
// const greeting = myName + ", witaj w świecie JavaScript!";

// const newNumber = 123;

// console.log(newNumber);

// console.log(typeof newNumber.toFixed());
// console.log(newNumber.toString());

// console.log(0b011101);
// console.log(0o35);

// console.log(typeof (100).toExponential());
// console.log(!Number.isInteger(1.2));

// const adam = "123.2";
// console.log(typeof (adam + ""));

// console.log(parseInt(adam));
// console.log((200.5).toFixed());
// console.log(Math.random(10, 20));

// const a = "10";
// console.log(a.length);

// const userName = "1234";
// userName.charAt(2);
// userName[2];
// userName["2"];

// console.log(userName.includes("1"));
// console.log("200");

// if (0) {
//   console.log("bbb");
// } else if (1) {
//   console.log("aaa");
// } else {
// }

// switch (1) {
//   case 1:
//     console.log("ez");
//     break;
//   case "false":
//     console.log("no ez");
//     break;
//   default:
//     console.log("ciekawe");
// }

// 1 ? console.log("tak") : "nie";

// const arraySample = [0, 1, 2, 3];

// arraySample[15] = "essa";

// console.log(arraySample);

// const abc = arraySample;

// delete arraySample[0];

// console.log(abc.length);
// let whatInSide = [];

// console.log(whatInSide instanceof Object);

//!!!DO NAUKI NA PAMIĘĆ!!!
const testowa = [
  "michael",
  "patric",
  "damianos",
  "kabanos",
  "essa",
  "more",
  1,
  4,
  3,
  -2,
];

const also = testowa.push("xd"); //dodaj na koncu plus zwraca length tablicy

const mniam = testowa.unshift("omg"); //dodaj na poczatku plus zwraca lenght tablicy

const user = testowa.pop(); //usuwa ostatni element i zwraca jego wartosc

const lastUser = testowa.shift(); //usuwa pierwszy element i zwraca jego wartosc

delete testowa[100]; //usuwa wybrany element ale nie usuwa indeksu nic nie zwraca

const aaa = ["zielony", "czerwony", "niebieski", ...testowa];

const conco = testowa.concat([0, 1, 2], aaa); //łaczene tablic

const conco2 = [...testowa, ...aaa, "suprise"]; //łaczenie tablic

const newTestowa = testowa.slice(); //kopiujemy zawartosc tablicy i wklejamy ja do nowej teraz nasza nowa tablica działa niezaleznie od tej od ktorej skopiowalismy wartosci !pamietaj! slice(2, 4) - pobierze element  z indeksem dwa oraz indeksem 3!!! mozna uzywac liczb minusowayvh np. slice(-2) pobierze dwa ostatnie elementy nie zmieniajac ich kolejnosci

const howItWorks = testowa.splice(); //usuwa wybrany fragment tablicy pierwsza liczba to indeks elementu od ktorego zacynamy a druga liczba to ilosc kolejnych elemntowa ktore chcemy usunac dodatkowo ta funkcja poza usunieciem zwraca usuwane elementy np. splice(0, 2) usunie pierwsze dwa elementy

// const howToReplace = testowa.splice(0, 6, 'piesek','piesek','piesek','piesek','piesek','piesek') //wartosc ktora usuwamy moze zamoenic na inna to samo mozna zrobić z kilkoma wartosciami

// const howToReplace2 = testowa.splice(0, 1, 'piessek', 'piesek') //usuwamy element pierwszy i wzamian dodajemy dwa nowe

// const howToAdd = testowa.splice(0,0, 'ez') //pozwala nam dodawac nowy element nowe elementy dokładnie tam gdzie chcemy np. splice(1,0, 'essa, 'essa2') doda nam dwa nowe elementy za elentem z indeksem 1, oczywiscie jak dodamy to nic nam nie zwroci bo zwraca tylko jak usuwamy

const sorting = testowa.sort(); // sortuje elementy alfabetycnie i zwraca je

const isIt = testowa.indexOf("michael"); //poszukuje elementu jezeli jest zwraca indeks gdzie sie znajduje, jezeli nie bedzie zwroci -1, jesli są dwa takie same elementy zwroci tylko gdzie znajduje sie pierwszy z nich chyba ze skorzystamy z lastIndexOf który poszukuje tak jagby od konca, korzystamy z indexOf takze przy stringach

const includeOrNot = testowa.includes("michael"); //zwraca zawsze true lub false korzystamy przy stringach tez sprawdza tez czy zgadza sie typ np. 22 i '22' nie bedzie tym samym wtedy

const stringFromArray = testowa.join(" - "); //zamienia tablice w stringa miedzy wartosciami mozemy dodawać co chcemy np przecinek .join(', ')

//dodatek - mozemy tez string zamienic na tablice np.
const lookHere = "michael, patric, kabanos".split(", "); //jezeli daje w nawiasach '' tak jak tutaj rozdzieli kazda litere jako nowy element natomiast dajac takie cos () wrzuci całego string jako jeden elemnt tablicy w nawiasie pozatym mozemy jeszcze zrobić takie coś (', ', 1) i to zanczy stworz nowy elemnt po przecinku z spacja oraz dodatkowo dopisujemy 1 co znaczy ze chcemy zeby pobrało tylko jeden element do naszej tablicy

const revereArray = testowa.reverse(); //odwaraca kolejnosc, jest destrukcyjne czyli faktycznie zmienia ułozenie wartosci po wykonaniu w tej tablicy a nie tylko zwraca taka zamiane jak np działa join ktore tylko zwraca nowa wartosc ale nie zmienia samej tablicy, tzw. metody destrukcyjne i nie destrukcyjne

console.log(); //!!!DO NAUKI NA PAMIĘĆ!!!

// const numbers = [5, 10, 15];

// if (numbers[0] + numbers[2] > numbers[1]) {
//   console.log(
//     "Suma pierwszego i ostatniego elementu jest większa niż drugi element"
//   );
// } else {
//   console.log(
//     "Suma pierwszego i ostatniego elementu nie jest większa niż drugi element"
//   );
// }

// const firstArray = [1, 2, 3];

// const secondArray = [4, 5];

// if (firstArray.length > secondArray.length) {
//   console.log("Pierwsza tablica jest dłuższa");
// } else if (firstArray.length === secondArray.length) {
//   console.log("Tablice mają taką samą długość");
// } else {
//   console.log("Druga tablica jest dłuższa");
// }

// const fruits = ["pear", "banana", "orange"];
// const fruits_v2 = ["apple", "banana", "orange"];

// if (fruits_v2[0] === "apple") {
//   console.log("Pierwszy element tablicy to 'apple'");
// } else {
//   console.log("Pierwszy element tablicy to nie 'apple'");
// }

// let gasoline = 40;
// let km = 0;

// while (gasoline--) {
//   km += 18;
//   console.log(
//     "Przejechaliśmy " +
//       km +
//       " kilometrów. Została nam jeszcze " +
//       gasoline +
//       " litrów benzyny"
//   );
//   if (gasoline === 5) {
//     alert("zatankuj!");
//   }
// }

// do {
//   console.log("ez");
// } while (false);

// Ciekawe Pętle!!!!!!

// const colors = [
//   "red",
//   "green",
//   "black",
//   "yellow",
//   "white",
//   "gold",
//   "silver",
//   "brown",
// ];

// for (const color of colors) {
//   console.log("mój ulubiony kolor to: " + color);
// }

//const usersAge = [20, 30, 21, 17, 67, 96, 55];

// usersAge.forEach(userAge => console.log(`Wiek użytkownika to ${userAge}`));

// Ciekawe Pętle!!!!!!

// let result = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     result += i;
//   }
// }
// console.log(result);

// let h = 6;

// for (let i = 1; i <= h; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// let result2 = 0;
// let i = 1;
// while (i <= 50) {
//   if (i % 3 === 0) {
//     result2++;
//   }
//   i++;
// }

// console.log(result2);

function addNumbers(x, y) {
  return x + y;
}

// console.log(addNumbers(3, 5));

const addNumbers2 = (text) => text;

// console.log(addNumbers2("hejjjj!"));

const addTwoNumbers = (x = 0, y = 0) => {
  const result = x + y;
  console.log(result);
  return result;
};
// addTwoNumbers();

const addAllNumbers = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

const usersMoney = addAllNumbers(3, 2, 200, 1, 3, 32, 213);
// console.log(usersMoney);

function showAllArguments(...items) {
  console.log(items);
  // console.log(arguments[5]);
  return items;
}
// showAllArguments("1", 2, 12, "ab", true, "Adam");

const aaa2 = ["zielony", "czerwony", "niebieski", ...testowa];

const conc03 = testowa.concat([0, 1, 2], aaa); //łaczene tablic

const conco4 = [...testowa, ...aaa, "suprise"]; //łaczenie tablic

function addAllWords(...words) {
  let txt = "";
  words.forEach((word) => {
    if (word !== words[words.length - 1]) {
      txt += `${word}, `;
    } else {
      txt += word;
    }
  });
  console.log(txt);
}

// addAllWords("ja", "ty", 2, "Gdańsk");

function showUsers(owner, ...others) {
  console.log(
    `Na imprezie był ${owner}${others.length ? "  oraz " + `${others}.` : "."}`
  );
}

// showUsers("Adrian");
// showUsers("Adrian", "Jadzia", "Staszek", "Henio");

function showUsers1(owner, ...others) {
  if (others.length === 0) {
    console.log(`Na imprezie był ${owner}.`);
  } else {
    if (others.length === 1) {
      console.log(`Na imprezie był ${owner}` + " oraz " + `${others}` + ".");
    } else {
      let txt = "";
      others.forEach((word) => {
        if (word !== others[others.length - 1]) {
          txt += `${word}, `;
        } else {
          txt += word;
        }
      });
      console.log(`Na imprezie był ${owner}` + " oraz " + txt + ".");
    }
  }
}

// showUsers1("Adrian");
// showUsers1("Adrian", "Jadzia", "Staszek", "Henio");

function showUsers2(owner, ...others) {
  if (others.length === 0) {
    console.log(`Na imprezie był ${owner}.`);
  } else {
    const othersList = others.length === 1 ? others[0] : others.join(", ");
    console.log(`Na imprezie był ${owner} oraz ${othersList}.`);
  }
}

// showUsers2("Adrian");
// showUsers2("Adrian", "Jadzia", "Staszek", "Henio");

function calculateAverage(average) {
  let result = 0;
  average.forEach((item) => (result += item));
  result /= average.length;
  console.log(result);
}

// calculateAverage([1, 2, 3, 4, 5]);

function filterEvenNumbers(numbers) {
  const result4 = [];
  numbers.forEach((item) => {
    if (item % 2 === 0) {
      result4.push(item);
    }
  });
  console.log(result4);
}

// filterEvenNumbers([1, 2, 3, 4, 5, 6]);

const countOccurrences = function (array, fruit) {
  let result2 = 0;
  array.forEach((item) => {
    if (item === fruit) {
      result2++;
    }
  });
  console.log(result2);
};

// countOccurrences(["apple", "banana", "apple", "orange", "banana"], "banana");
var essa = "es";

var essa = 123;

// console.log(essa);
let varFun = 0;
function variablesInFunction() {
  var inFunction = "jestem";
  // varFun = 4;
  // console.log(varFun);
  // console.log(inFunction);
  // let letFun = 5;
  // const constFun = 6;
  // console.log(funInFun);

  function showVariable() {
    // const constFun = "funkcja w funkcji";
    varFun = "nadpisuje wartość zmiennej z wyższego zakresu";
    let funInFun = "lokalny w lokalnym";
    console.log(varFun);
    //Zmienne zadeklarowane w zakresach wyżyszych są widoczne w zakresie zagnieżdzonym (również te zadeklarowane w zakresie globalnym), ale mogą być przysłonięte przez własny zakres (czy kolejny zakres nadrzędny).
  }
  showVariable();
}

// variablesInFunction();
// console.log(varFun);

function calculate(a, b) {
  // const a = a;
  // const b = b;
  let number1 = a;
  let number2 = b;

  add(number1, number2);
}

function add(x, y) {
  x = 10;
  console.log(x + y);
}

const firstNumber = 10;
// calculate(firstNumber, 3);

function calculate2(a, b) {
  // const a = a;
  // const b = b;
  let number1 = a;
  const number2 = b;

  add2(number1, number2);
}

function add2(a, b) {
  console.log(a + b);
}

// calculate2(2, 3);
let i = 100;

for (let i = 0; i < 10; i++) {
  // let i = 10;
  // console.log(i);
  // const inFor = "wewnątrz pętli";
  // if (i < 4) {
  // i = 10;
  // let i = 20;
  // inFor = "wewnątrz pętli i wewnątrz instrukcji warunkowej";
  // const inFor = "wewnątrz pętli i wewnątrz instrukcji warunkowej";
  // console.log("i wewnątrz instrukcji warunkowej, w pętli " + i);
  // console.log(inFor);
  // }
}

const abc = new Function("ez", "console.log(ez)");

abc("essa");

const abc1 = (ez) => console.log(ez);

abc("essa");

const dog = {
  abc: "pieseł",
  name: ["Fafik", "Azor"],

  age: 9,

  "eye color": "black",

  barking: function () {
    console.log("hau hau");
  },

  // ES6
  squeaking() {
    console.log("aaaa uuu eee");
  },

  abc: {
    kote: "micho",
  },
};

dog.pieseł = "puszek";
delete dog["eye color"];

console.log(dog.abc.kote);

//  this = nazwa obiketu  w tym wypdaku this = counter mozemy sie tak odwoływać bedac bezposrednio w danym obiekcie
const counter = {
  score: 0,
  increment: function () {
    this.score++;
    console.log(this.score);
  },
};

counter.increment();
// template string

// console.log(`Obecnie zegarek wskazuje ${new Date().toLocaleString()}`);

// console.log(`Do zapłaty: ${(price + (price * tax) / 100).toFixed(2)} złotych`)

// dwa sposoby robienia tablic z obiketów tablico podoncyh do których naleza miedzy inni argumenty funkcji wypisywane poprzez własciwość arguments  oraz np wszystkie elementy z danej grupy elementów jak np. wszystkie zdjecia ze strony wypisywane poprzez właćiwosc document.images oczywiscie nie  musza byc to zdjecia moga byc to rowniez wszystkei pozostałe elementy ale nie jest ich chyba za wiele

// const argumenty = Array.from(arguments)  wywołujemy wewnatrz  funkcji i wszystkie argumenty funkcji kóre chcemy umieszczamy w jednej tablicy
// const zdjecia = [...document.images] //operator res (...) działa tak  naprawde tak ze pobiera wszystkei elemnty i je rozbija  dzieki temu ze umiescilismy to w tablicy powstała nam tablica, dzk operatorowi rest mozemy  takze łaczyć kilka trbalic razem

// document.documentElement  odnosci sie do html strony
// document.body odnosi sie do body strony i tylko do body

document.querySelector("li");

document.querySelector("li:nth-child(3)"); //('li:first-child') - tylko do pobrania pierwszego elemntu z grupki

document.getElementById("ul");

document.querySelector("#ul");

document.querySelector(".ul");

// wiecej elementów na  raz

document.querySelectorAll("* ul>li"); // obiekt tablico podobny z wieloma metodami, node list

document.getElementsByTagName("li"); // obiekt tablico podobny z niewieloma metodami, html collection

document.getElementsByClassName("ul"); // obiekt tablico podobny z niewieloma metodami, html collection

// ciekawy przykład
//document.querySelector("* ul:nth-child(2)>li:nth-child(3)") przy takim zapisie pobieramy 3 element  li  w drugim elemencie ul na stronie
const h2 = document.querySelector("h2");

const h2Class = h2.getAttribute("class"); //pobieramy wartosc danego atrybutu w tym wypadku classa = h2

h2.textContent; //zwraca sam tekst okrslonego elementu np. przykładowy tekst
h2.innerHTML; //zwraca tekst okreslonego elemntu z wszystkimi tagami html np. przykładowy <strong>tekst</strong>

h2.classList; //zwraca wszystkie klasy danego elementu

h2.classList.contains("title"); //czesto uzywamy to z metodami jak np tutaj metoda containts() ktora sprawdza czy spośród klas którać z nich to klasa title jezeli  tak zwroci true jesli nie  zwroci false w skrocie sprawdza  czy elemnet  zwiera dana klase

h2.textContent = "siema"; //tylko tekst
h2.innerHTML = "<em>siema</em>"; //bardziej rozbudowane

// h2.style.color = "white"; //dodanie styli

h2.style.backgroundColor = "green"; //zamiast myslnika camelCase

//mozemy dodawać dodadtkowe style do elementu poprzez przypisanie klasy z styli css klasa musi byc  juz stworzona w css i musi cos zawierac ale nie msi byc przypisana do elementu dodanie nowej klasy nie  sprawi ze sresetujemy wszystkie wczesniejsze style
h2.classList.add("h1");
h2.classList.toggle("h1");
h2.classList.toggle("h1");
h2.classList.remove("h1");

h2.className = "remake"; // przypisuje nową klase ktora usuwa  wszystkie pozostałe jakie były, jezeli nie zdefiniujemy takiej klasy w css to wyswietla nam sie  style domyslne badz te jakie przypisalismy to konketnego elementu w tym wypdaku h2 np. h2{color: pink}

h2.id = "remake"; //nadpisujemy id podobnie jak nadpisywalismy klase z uzyciem className

//mozemy pobierać tez inne atrybuty np ze zdjecia moglibysmy pobrać atrybut src i podmiec wartosc w tym wypadku bysmy pomienili zdjecie np. img.src = 'nowe.jpg'

h2.setAttribute("title", "Uwaga"); //dodajemy nowy atrybut plus jego wartosc w tym wypdaku uzytkownik po najechaniu na h2 zobaczy uwaga

h2.setAttribute("class", "remake"); //to samo co h2.className = "remake";

//Jak dodać nowy atrybut do kilku elementów na raz

const liItems = document.querySelectorAll("li");
const LiItems1 = [...document.getElementsByTagName("li")]; //jest to starszy typ pobierania elementów i nie obsługuje metody .forEach() ktora juz w przypadku tablic działa tagze zamieniamy na tablice i po problemie

// liItems.style.fontSize = "40px"; // nie zadziała

liItems.forEach((item) => {
  item.style.textDecoration = "underline";
  item.style.fontSize = "40px";
  item.classList.add("red");
});

window.addEventListener("scroll", function () {
  console.log("skroluje");
}); // funkcja kóra reaguje na scrollowanie

window.addEventListener("dblclick", function () {
  console.log("podwójne klinknięcie");
}); // funkcja kóra reaguje na podwojne klikniecie

window.addEventListener("click", function () {
  console.log("pojedyncze klinknięcie");
}); // funkcja kóra reaguje na pojedyncze  klknciecie

// document.querySelector("h2").addEventListener("mousemove", function () {
//   h2.textContent += "+";
//   console.log("ruch myszką po h2");
// });

const h1 = document.querySelector("h1");

const addText = function () {
  this.textContent += " :) "; //dodanie znaków (stringa) do istniejacej zawartości tekstowej
  this.classList.toggle("red"); //dodanie/zabranie klasy z elementu (dodaje jak nie ma, zabiera jak jest)
};

h2.addEventListener("click", addText);

const addClassRed = function () {
  items.forEach((item) => item.classList.toggle("red"));
};

const items = document.querySelectorAll("li");
items.forEach((item) => item.addEventListener("click", addClassRed));

const divElement = document.createElement("div");
divElement.textContent = "Ostatni DIV";
divElement.style.backgroundColor = "yellow";
document.body.appendChild(divElement);

document.title;
document.domain;
document.body;

window.innerHeight; //wysokość okna (inneWidth - szerokość)
window.scrollY; //wartość skrola

// const showTime = function() {
//  time += 5;
//  console.log(`Już ${time} sekund tu jesteś`);
//  setTimeout(showTime, 5000);
// }

// let time = 0;

// setTimeout(showTime, 5000)

// let timer = 0;

// setInterval(() => console.log(++timer), 1000)

const a = [0, 1, 2, 3, 4, 5];

console.log(a.at(-1));
