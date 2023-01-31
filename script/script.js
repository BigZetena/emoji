import { data } from "../data/data.js";

const grid = document.querySelector(".main__wrapper");
const input = document.querySelector("input");
const uniqData = getUniqData(data);

function getUniqData(arr) {
  const arrCopy = [];
  arr.forEach((item) => {
    arrCopy.push({
      ...item,
      keywords: [...new Set(item.keywords.split(" "))].join(" "),
    });
  });
  return arrCopy;
}

// function dataFiletr(arr) {
//   return arr.map((item) => ({
//     ...item,
//     keywords: (item.keywords = [...new Set(item.keywords.split(" "))].join(
//       " "
//     )),
//   }));
// }

function createCard(obj) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<p class="card__icon">${obj.symbol}</p>
                    <p class="card__title">${obj.title}</p>
                    <p class="card__discription">${obj.keywords}</p>`;
  return card;
}

function emojiSearch(evt) {
  let valueInput = evt.target.value.toLowerCase().trim();
  grid.innerHTML = "";
  uniqData
    .filter(
      (item) =>
        item.keywords.toLowerCase().includes(valueInput) ||
        item.title.toLowerCase().includes(valueInput)
    )
    .forEach((item) => {
      grid.append(createCard(item));
    });
}

input.addEventListener("input", emojiSearch);

uniqData.forEach((item) => {
  grid.append(createCard(item));
});

console.log(data);
console.log(uniqData);
