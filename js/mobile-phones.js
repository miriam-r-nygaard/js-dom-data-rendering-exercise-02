"use strict";

const mobilePhones = [
  {
    id: 1,
    brandname: "Apple",
    brandmodel: "iPhone 15",
    color: "black",
    price: "3999",
    memory: "128 GB",
    img: "img/iphone-15-128-black.webp",
  },
  {
    id: 2,
    brandname: "Apple",
    brandmodel: "iPhone 16",
    color: "black",
    price: "4999",
    memory: "128 GB",
    img: "img/iphone-16-128-black.webp",
  },
  {
    id: 3,
    brandname: "Apple",
    brandmodel: "iPhone 17",
    color: "black",
    price: "8999",
    memory: "256 GB",
    img: "img/iphone-17-256-black.webp",
  },
  {
    id: 4,
    brandname: "Apple",
    brandmodel: "iPhone 17",
    color: "white",
    price: "8999",
    memory: "256 GB",
    img: "img/iphone-17-256-white.webp",
  },
  {
    id: 5,
    brandname: "Apple",
    brandmodel: "iPhone 17 Pro Max",
    color: "black",
    price: "10999",
    memory: "256 GB",
    img: "img/iphone-17-pro-max-256-black.webp",
  },
];
//Opgave 3 – Opret datastrukturen mobilePhones med de første 5 telefoner

const phonesContainer = document.querySelector("#phones-container");
//Opgave 4 – Opret variablen phonesContainer
function displayPhones(phoneList) {
  phonesContainer.innerHTML = "";
  phones.forEach((item) => {
    phonesContainer.innerHTML += `
    <article>
      <h2>${item.brandnavn}</h2>
      <ul>
        <li><p>${item.brandmodel}</p></li>
        <li><p>${item.color}</p></li>
        <li><p>${item.price}</p></li>
        <li><p>${item.memory}</p></li>
      </ul>
      <figure>
        <img src="${item.img}" alt="${item.brandmodel}">
       <figcaption>${item.brandmodel}</figcaption>
     </figure>
    </article>
    `;
  });
}
//Opgave 5 – Opret funktionen
//Opgave 6 – Tøm containeren før telefonerne vises
//Opgave 7 – Brug `forEach()` til at gennemløbe telefonerne
//Opgave 8 – Brug innerHTML og template literals
//Opgave 9 – Tilføj billede
