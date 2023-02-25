const form = document.querySelector("form");
const cardsDiv = document.querySelector("#cards-div");
let values = [];
let imgUrl;
let imgarr = [
  "/images/archlibrary.jpg",
  "/images/library.jpg",
  "/images/flippingbook.jpg",
  "/images/writing.jpg",
  "/images/studying.jpg",
  "/images/pencil.jpg",
  "/images/lecture.jpg",
];

function handleSubmit(ev) {
  ev.preventDefault();
  let myForm = ev.target;
  let fd = new FormData(myForm);
  for (const [key, value] of fd) {
    values.push(value);
  }
  imgUrl = Math.floor(Math.random() * imgarr.length);
  imgUrl = imgarr[imgUrl];
  const cardAdd = new CardAdd(values[0], values[1], values[2], imgUrl);
  cardAdd.constructElems();
}

class CardAdd {
  constructor(name, course, author, url) {
    this.name = name;
    this.course = course;
    this.author = author;
    this.url = url;
  }

  constructElems() {
    const div = document.createElement("div");
    div.classList.add("newcards");
    if (cardsDiv.lastElementChild === null) {
      cardsDiv.append(div);
    } else {
      cardsDiv.appendChild(div);
    }
    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = this.url;
    const p = document.createElement("p");
    p.innerHTML += "<span class='yellow-span'>Name:</span>" + this.name;
    const p2 = document.createElement("p");
    p2.innerHTML += "<span class='green-span'>Course:</span>" + this.course;
    const p3 = document.createElement("p");
    p3.innerHTML += "<span class='red-span'>Author:</span>" + this.author;
    div.append(img, p, p2, p3);
    clear();
  }
}

function clear() {
  imgarr = imgarr.filter((element) => element !== imgUrl);
  values = [];
  imgUrl = 0;
  form.reset();
}

form.addEventListener("submit", handleSubmit);
