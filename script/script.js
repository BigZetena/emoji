import { data } from "../data/data.js";

const uniqData = dataFiletr(data);
const grid = document.querySelector(".main__wrapper");
const input = document.querySelector("input");

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

input.addEventListener("input", emojiSearch);

function emojiSearch(evt) {
  const filteredData = uniqData.filter(
    (item) => item.keywords == evt.target.value
  );
  if (filteredData == undefined) return;
  grid.append(createCard(filteredData));
  console.log(evt.target.value);
}

// uniqData.forEach((item) => {
//   grid.append(createCard(item));
// });
