import { data } from "../data/data.js";

const filtredData = dataFiletr(data);
const grid = document.querySelector(".main__wrapper");

function dataFiletr(arr) {
  return arr.map((item) => ({
    ...item,
    keywords: (item.keywords = [...new Set(item.keywords.split(" "))].join(
      " "
    )),
  }));
}

function createCard(obj) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<p class="card__icon">${obj.symbol}</p>
                    <p class="card__title">${obj.title}</p>
                    <p class="card__discription">${obj.keywords}</p>`;
  return card;
}

filtredData.forEach((item) => {
  grid.append(createCard(item));
});

// let obj = {
//   name: "hui",
//     height: 24,
//     sickness: {
//         aids: true,
//         sifilis: false
//     },
//     standUp: function () {
//         return this.height = 48
//     }
// };

// let copy = obj;

// console.log((copy.height = 12), obj);
